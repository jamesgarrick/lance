import {
  Node,
  SyntaxKind,
  type AwaitExpression,
  type Expression,
  type ImportDeclaration,
  type SourceFile,
  type Statement,
} from "ts-morph";
import {
  lowerForOfStatement,
  lowerForStatement,
  type ForLoweringContext,
} from "./lower-for-statement";
import { lowerSwitchStatement, type SwitchLoweringContext } from "./lower-switch-statement";
import { lowerThrowStatement, type ThrowLoweringContext } from "./lower-throw-statement";
import { lowerDoWhileStatement, type DoWhileLoweringContext } from "./lower-do-while";
import { lowerTryStatement, type TryLoweringContext } from "./lower-try-statement";
import type { DiagnosticBag } from "../compiler/diagnostics";
import type { CompilerOptions } from "../compiler/options";
import type { FunctionRegistry } from "../compiler/project";
import type {
  SqfArrayExpression,
  SqfBinaryExpression,
  SqfCallExpression,
  SqfCodeBlock,
  SqfCommandExpression,
  SqfConditionalExpression,
  SqfExpression,
  SqfExpressionStatement,
  SqfFunctionFile,
  SqfIdentifier,
  SqfIfStatement,
  SqfLiteral,
  SqfPropertyAccessExpression,
  SqfReturnStatement,
  SqfStatement,
  SqfUnaryExpression,
  SqfVariableStatement,
  SqfWhileStatement,
} from "../ir/nodes";
import { sqfMethodCommandRegistry } from "../semantic/command-registry";
import type { CfgRootName, SemanticContext } from "../semantic/context";
import { resolveCfgReference } from "../semantic/context";
import { lowerBinaryOperator } from "./lower-operators";

// ─── public API ──────────────────────────────────────────────────────────────

export interface LoweringResult {
  readonly entryStatements: readonly SqfStatement[];
  readonly functionFiles: readonly SqfFunctionFile[];
}

export function lowerSourceFile(
  sourceFile: SourceFile,
  isEntry: boolean,
  diagnostics: DiagnosticBag,
  options: CompilerOptions,
  semanticContext: SemanticContext,
  functionRegistry: FunctionRegistry,
): LoweringResult {
  const typesPackageName = options.typesPackageName ?? "lance";
  const bindings = collectSemanticBindings(sourceFile, functionRegistry, typesPackageName);
  const scope = createScope();

  const entryStatements: SqfStatement[] = [];
  const functionFiles: SqfFunctionFile[] = [];

  for (const statement of sourceFile.getStatements()) {
    if (Node.isImportDeclaration(statement)) continue;

    if (Node.isFunctionDeclaration(statement)) {
      const name = statement.getName();
      if (!name) continue;

      const key = `${sourceFile.getFilePath()}::${name}`;
      const info = functionRegistry.get(key);
      if (!info) continue;

      const parameters = statement.getParameters().map((p) => p.getName());
      const fnScope = addLocalNames(createScope(), parameters);
      const body = statement.getBody();
      const rawStatements = body && Node.isBlock(body) ? body.getStatements() : [];

      const loweredBody = statement.isAsync()
        ? lowerAsyncBody(rawStatements, diagnostics, bindings, semanticContext, fnScope)
        : rawStatements.map((s) =>
            lowerStatement(s, diagnostics, bindings, semanticContext, fnScope),
          );

      functionFiles.push({
        kind: "FunctionFile",
        sqfName: info.sqfName,
        outputPath: info.outputPath,
        category: info.category,
        functionName: info.functionName,
        tag: info.tag,
        parameters,
        body: loweredBody,
      });
      continue;
    }

    if (isEntry) {
      entryStatements.push(
        lowerStatement(statement, diagnostics, bindings, semanticContext, scope),
      );
    }
  }

  return { entryStatements, functionFiles };
}

// ─── async CPS transform ─────────────────────────────────────────────────────

function lowerAsyncBody(
  statements: Statement[],
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
  scope: LoweringScope,
): SqfStatement[] {
  const awaitIndex = findAwaitSleepIndex(statements, bindings);

  if (awaitIndex === -1) {
    return statements.map((s) =>
      lowerStatement(s, diagnostics, bindings, semanticContext, scope),
    );
  }

  const before = statements
    .slice(0, awaitIndex)
    .map((s) => lowerStatement(s, diagnostics, bindings, semanticContext, scope));

  const awaitStmt = statements[awaitIndex]!;
  const delayExpr = extractSleepDelay(awaitStmt, diagnostics, bindings, semanticContext, scope);

  const continuation = lowerAsyncBody(
    statements.slice(awaitIndex + 1),
    diagnostics,
    bindings,
    semanticContext,
    scope,
  );

  const waitCall: SqfExpressionStatement = {
    kind: "ExpressionStatement",
    expression: {
      kind: "CallExpression",
      callee: { kind: "Identifier", text: "LANCE_fnc_waitAndExecute" },
      args: [
        { kind: "CodeBlock", body: continuation } satisfies SqfCodeBlock,
        { kind: "ArrayExpression", elements: [] } satisfies SqfArrayExpression,
        delayExpr,
      ],
    },
  };

  return [...before, waitCall];
}

function findAwaitSleepIndex(
  statements: Statement[],
  bindings: SourceFileSemanticBindings,
): number {
  if (!bindings.sleepLocalName) return -1;
  const sleepName = bindings.sleepLocalName;

  return statements.findIndex((stmt) => {
    if (!Node.isExpressionStatement(stmt)) return false;
    const expr = stmt.getExpression();
    if (!Node.isAwaitExpression(expr)) return false;
    const inner = (expr as AwaitExpression).getExpression();
    if (!Node.isCallExpression(inner)) return false;
    const callee = inner.getExpression();
    return Node.isIdentifier(callee) && callee.getText() === sleepName;
  });
}

function extractSleepDelay(
  awaitStmt: Statement,
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
  scope: LoweringScope,
): SqfExpression {
  if (!Node.isExpressionStatement(awaitStmt)) return { kind: "Literal", text: "0" };
  const awaitExpr = awaitStmt.getExpression();
  if (!Node.isAwaitExpression(awaitExpr)) return { kind: "Literal", text: "0" };
  const callExpr = awaitExpr.getExpression();
  if (!Node.isCallExpression(callExpr)) return { kind: "Literal", text: "0" };
  const args = callExpr.getArguments().filter(Node.isExpression);
  if (args.length === 0) return { kind: "Literal", text: "0" };
  return lowerExpression(args[0]!, diagnostics, bindings, semanticContext, scope);
}

// ─── statement lowering ──────────────────────────────────────────────────────

function lowerStatement(
  statement: Statement,
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
  scope: LoweringScope,
): SqfStatement {
  if (Node.isVariableStatement(statement)) {
    const declaration = statement.getDeclarations()[0];
    const name = declaration?.getName() ?? "unknown";
    return {
      kind: "VariableStatement",
      name,
      initializer: declaration?.getInitializer()
        ? lowerExpression(
            declaration.getInitializerOrThrow(),
            diagnostics,
            bindings,
            semanticContext,
            addLocalName(scope, name),
          )
        : undefined,
    } satisfies SqfVariableStatement;
  }

  if (Node.isExpressionStatement(statement)) {
    const expr = statement.getExpression();
    if (Node.isAwaitExpression(expr)) {
      diagnostics.add({
        code: "LANCE_AWAIT_OUTSIDE_ASYNC",
        severity: "warning",
        phase: "lowering",
        message: "await expression outside async function — skipped",
        span: { filePath: statement.getSourceFile().getFilePath(), line: statement.getStartLineNumber() },
      });
      return { kind: "RawTsStatement", text: statement.getText() };
    }
    return {
      kind: "ExpressionStatement",
      expression: lowerExpression(expr, diagnostics, bindings, semanticContext, scope),
    } satisfies SqfExpressionStatement;
  }

  if (Node.isReturnStatement(statement)) {
    return {
      kind: "ReturnStatement",
      expression: statement.getExpression()
        ? lowerExpression(
            statement.getExpressionOrThrow(),
            diagnostics,
            bindings,
            semanticContext,
            scope,
          )
        : undefined,
    } satisfies SqfReturnStatement;
  }

  if (Node.isIfStatement(statement)) {
    const elseStatement = statement.getElseStatement();
    return {
      kind: "IfStatement",
      condition: lowerExpression(
        statement.getExpression(),
        diagnostics,
        bindings,
        semanticContext,
        scope,
      ),
      thenStatements: lowerStatementBlock(
        statement.getThenStatement(),
        diagnostics,
        bindings,
        semanticContext,
        scope,
      ),
      elseStatements: elseStatement
        ? lowerStatementBlock(elseStatement, diagnostics, bindings, semanticContext, scope)
        : [],
    } satisfies SqfIfStatement;
  }

  if (Node.isWhileStatement(statement)) {
    return {
      kind: "WhileStatement",
      condition: lowerExpression(
        statement.getExpression(),
        diagnostics,
        bindings,
        semanticContext,
        scope,
      ),
      body: lowerStatementBlock(
        statement.getStatement(),
        diagnostics,
        bindings,
        semanticContext,
        scope,
      ),
    } satisfies SqfWhileStatement;
  }

  if (Node.isForStatement(statement)) {
    return lowerForStatement(statement, makeForContext(diagnostics, bindings, semanticContext, scope), diagnostics);
  }

  if (Node.isForOfStatement(statement)) {
    return lowerForOfStatement(statement, makeForContext(diagnostics, bindings, semanticContext, scope), diagnostics);
  }

  if (Node.isSwitchStatement(statement)) {
    return lowerSwitchStatement(statement, makeSwitchContext(diagnostics, bindings, semanticContext, scope), diagnostics);
  }

  if (Node.isThrowStatement(statement)) {
    return lowerThrowStatement(statement, makeThrowContext(diagnostics, bindings, semanticContext, scope), diagnostics);
  }

  if (Node.isDoStatement(statement)) {
    return lowerDoWhileStatement(
      statement,
      makeDoWhileContext(diagnostics, bindings, semanticContext, scope),
    );
  }

  if (Node.isTryStatement(statement)) {
    return lowerTryStatement(
      statement,
      makeTryContext(diagnostics, bindings, semanticContext, scope),
      diagnostics,
    );
  }

  if (Node.isBreakStatement(statement)) {
    return { kind: "BreakStatement" };
  }

  if (Node.isContinueStatement(statement)) {
    return { kind: "ContinueStatement" };
  }

  diagnostics.add({
    code: "LANCE_UNSUPPORTED_STATEMENT",
    severity: "warning",
    phase: "lowering",
    message: `Unsupported statement kind: ${statement.getKindName()}`,
    span: {
      filePath: statement.getSourceFile().getFilePath(),
      line: statement.getStartLineNumber(),
    },
  });

  return { kind: "RawTsStatement", text: statement.getText() };
}

// ─── lowering-context builders for sub-modules ───────────────────────────────

function makeForContext(
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
  scope: LoweringScope,
): ForLoweringContext {
  return {
    lowerExpression: (expr) => lowerExpression(expr, diagnostics, bindings, semanticContext, scope),
    lowerStatementBlock: (stmt) => lowerStatementBlock(stmt, diagnostics, bindings, semanticContext, scope),
  };
}

function makeSwitchContext(
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
  scope: LoweringScope,
): SwitchLoweringContext {
  return {
    lowerExpression: (expr) => lowerExpression(expr, diagnostics, bindings, semanticContext, scope),
    lowerStatement: (stmt) => lowerStatement(stmt, diagnostics, bindings, semanticContext, scope),
  };
}

function makeThrowContext(
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
  scope: LoweringScope,
): ThrowLoweringContext {
  return {
    lowerExpression: (expr) => lowerExpression(expr, diagnostics, bindings, semanticContext, scope),
  };
}

function makeDoWhileContext(
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
  scope: LoweringScope,
): DoWhileLoweringContext {
  return {
    lowerExpression: (expr) => lowerExpression(expr, diagnostics, bindings, semanticContext, scope),
    lowerStatementBlock: (stmt) => lowerStatementBlock(stmt, diagnostics, bindings, semanticContext, scope),
  };
}

function makeTryContext(
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
  scope: LoweringScope,
): TryLoweringContext {
  return {
    lowerStatementBlock: (stmt) => lowerStatementBlock(stmt, diagnostics, bindings, semanticContext, scope),
  };
}

function lowerStatementBlock(
  statement: Statement,
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
  parentScope: LoweringScope,
): readonly SqfStatement[] {
  const blockScope = cloneScope(parentScope);
  if (Node.isBlock(statement)) {
    return statement
      .getStatements()
      .map((s) => lowerStatement(s, diagnostics, bindings, semanticContext, blockScope));
  }
  return [lowerStatement(statement, diagnostics, bindings, semanticContext, blockScope)];
}

// ─── expression lowering ─────────────────────────────────────────────────────

function lowerExpression(
  expression: Expression,
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
  scope: LoweringScope,
): SqfExpression {
  const commandExpr = tryLowerSpecialCommandExpression(
    expression,
    diagnostics,
    bindings,
    semanticContext,
    scope,
  );
  if (commandExpr) return commandExpr;

  const cfgLiteral = tryLowerCfgLiteral(expression, bindings, semanticContext, diagnostics);
  if (cfgLiteral) return cfgLiteral;

  if (Node.isParenthesizedExpression(expression)) {
    return lowerExpression(expression.getExpression(), diagnostics, bindings, semanticContext, scope);
  }

  if (Node.isIdentifier(expression)) {
    return {
      kind: "Identifier",
      text: resolveIdentifierText(expression.getText(), scope),
    } satisfies SqfIdentifier;
  }

  if (
    Node.isStringLiteral(expression) ||
    Node.isNumericLiteral(expression) ||
    expression.getKind() === SyntaxKind.TrueKeyword ||
    expression.getKind() === SyntaxKind.FalseKeyword
  ) {
    return { kind: "Literal", text: expression.getText() } satisfies SqfLiteral;
  }

  if (Node.isCallExpression(expression)) {
    const callee = expression.getExpression();
    const args = expression
      .getArguments()
      .filter(Node.isExpression)
      .map((a) => lowerExpression(a, diagnostics, bindings, semanticContext, scope));

    if (Node.isIdentifier(callee)) {
      const sqfName = bindings.importedProjectFunctions.get(callee.getText());
      if (sqfName) {
        return {
          kind: "CallExpression",
          callee: { kind: "Identifier", text: sqfName },
          args,
        } satisfies SqfCallExpression;
      }
    }

    return {
      kind: "CallExpression",
      callee: lowerExpression(callee, diagnostics, bindings, semanticContext, scope),
      args,
    } satisfies SqfCallExpression;
  }

  if (Node.isPropertyAccessExpression(expression)) {
    return {
      kind: "PropertyAccessExpression",
      target: lowerExpression(
        expression.getExpression(),
        diagnostics,
        bindings,
        semanticContext,
        scope,
      ),
      property: expression.getName(),
    } satisfies SqfPropertyAccessExpression;
  }

  if (Node.isArrayLiteralExpression(expression)) {
    return {
      kind: "ArrayExpression",
      elements: expression
        .getElements()
        .map((el) => lowerExpression(el as Expression, diagnostics, bindings, semanticContext, scope)),
    } satisfies SqfArrayExpression;
  }

  if (Node.isBinaryExpression(expression)) {
    const operator = lowerBinaryOperator(expression.getOperatorToken().getText(), expression, diagnostics);
    return {
      kind: "BinaryExpression",
      operator,
      left: lowerExpression(expression.getLeft(), diagnostics, bindings, semanticContext, scope),
      right: lowerExpression(expression.getRight(), diagnostics, bindings, semanticContext, scope),
    };
  }

  if (Node.isConditionalExpression(expression)) {
    return {
      kind: "ConditionalExpression",
      condition: lowerExpression(expression.getCondition(), diagnostics, bindings, semanticContext, scope),
      whenTrue: lowerExpression(expression.getWhenTrue(), diagnostics, bindings, semanticContext, scope),
      whenFalse: lowerExpression(expression.getWhenFalse(), diagnostics, bindings, semanticContext, scope),
    } satisfies SqfConditionalExpression;
  }

  if (Node.isPrefixUnaryExpression(expression)) {
    const operatorKind = expression.getOperatorToken();
    const operand = lowerExpression(expression.getOperand(), diagnostics, bindings, semanticContext, scope);
    if (operatorKind === SyntaxKind.ExclamationToken) {
      return { kind: "UnaryExpression", operator: "!", operand } satisfies SqfUnaryExpression;
    }
    if (operatorKind === SyntaxKind.MinusToken) {
      return { kind: "UnaryExpression", operator: "-", operand } satisfies SqfUnaryExpression;
    }
    // ++ / -- in expression position falls through to the unsupported diagnostic below.
  }

  diagnostics.add({
    code: "LANCE_UNSUPPORTED_EXPRESSION",
    severity: "warning",
    phase: "lowering",
    message: `Unsupported expression kind: ${expression.getKindName()}`,
    span: {
      filePath: expression.getSourceFile().getFilePath(),
      line: expression.getStartLineNumber(),
    },
  });

  return { kind: "Literal", text: expression.getText() };
}

// ─── bindings ────────────────────────────────────────────────────────────────

interface SourceFileSemanticBindings {
  readonly importedLocalNames: Readonly<Record<string, string | undefined>>;
  readonly sleepLocalName: string | undefined;
  readonly importedProjectFunctions: ReadonlyMap<string, string>;
}

function collectSemanticBindings(
  sourceFile: SourceFile,
  functionRegistry: FunctionRegistry,
  typesPackageName: string,
): SourceFileSemanticBindings {
  const lanceImport = sourceFile
    .getImportDeclarations()
    .find((d) => d.getModuleSpecifierValue() === typesPackageName);

  const importedLocalNames = {
    player: getNamedImportLocalName(lanceImport, "player"),
    cfgWeapons: getNamedImportLocalName(lanceImport, "cfgWeapons"),
    cfgWeaponsItems: getNamedImportLocalName(lanceImport, "cfgWeaponsItems"),
    cfgMagazines: getNamedImportLocalName(lanceImport, "cfgMagazines"),
  };

  const sleepLocalName = getNamedImportLocalName(lanceImport, "sleep");

  const importedProjectFunctions = new Map<string, string>();
  for (const decl of sourceFile.getImportDeclarations()) {
    if (!decl.getModuleSpecifierValue().startsWith(".")) continue;
    const resolvedFile = decl.getModuleSpecifierSourceFile();
    if (!resolvedFile) continue;
    for (const named of decl.getNamedImports()) {
      const exportedName = named.getName();
      const localName = named.getAliasNode()?.getText() ?? named.getName();
      const info = functionRegistry.get(`${resolvedFile.getFilePath()}::${exportedName}`);
      if (info) importedProjectFunctions.set(localName, info.sqfName);
    }
  }

  return { importedLocalNames, sleepLocalName, importedProjectFunctions };
}

function getNamedImportLocalName(
  decl: ImportDeclaration | undefined,
  exportedName: string,
): string | undefined {
  const named = decl?.getNamedImports().find((e) => e.getName() === exportedName);
  return named?.getAliasNode()?.getText() ?? named?.getName();
}

// ─── command / cfg helpers ───────────────────────────────────────────────────

function tryLowerSpecialCommandExpression(
  expression: Expression,
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
  scope: LoweringScope,
): SqfCommandExpression | undefined {
  if (!Node.isCallExpression(expression)) return undefined;
  const callee = expression.getExpression();
  if (!Node.isPropertyAccessExpression(callee)) return undefined;
  const receiverExpr = callee.getExpression();
  if (!Node.isIdentifier(receiverExpr)) return undefined;

  const spec = sqfMethodCommandRegistry.find(
    (entry) =>
      bindings.importedLocalNames[entry.exportedReceiverName] === receiverExpr.getText() &&
      entry.methodName === callee.getName(),
  );
  if (!spec) return undefined;

  return {
    kind: "CommandExpression",
    receiver: { kind: "Identifier", text: spec.exportedReceiverName },
    command: spec.emittedCommand,
    args: expression
      .getArguments()
      .filter(Node.isExpression)
      .map((a) => lowerExpression(a, diagnostics, bindings, semanticContext, scope)),
  };
}

function tryLowerCfgLiteral(
  expression: Expression,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
  diagnostics: DiagnosticBag,
): SqfLiteral | undefined {
  const path = getPropertyAccessPath(expression);
  if (!path) return undefined;

  // Only attempt resolution if the root segment is a known cfg import
  const rootName = Object.entries(bindings.importedLocalNames).find(
    ([exportedName, localName]) => localName === path[0] && isCfgRootName(exportedName),
  )?.[0];
  if (!rootName) return undefined;

  const resolved = resolveImportedCfgReference(path, bindings, semanticContext);
  if (!resolved) {
    diagnostics.add({
      code: "LANCE_UNRESOLVED_CFG_REFERENCE",
      severity: "error",
      phase: "lowering",
      message: `Could not resolve cfg reference: ${path.join(".")}`,
      span: {
        filePath: expression.getSourceFile().getFilePath(),
        line: expression.getStartLineNumber(),
      },
    });
    return { kind: "Literal", text: `"UNRESOLVED_CFG: ${path.join(".")}"` };
  }

  return { kind: "Literal", text: JSON.stringify(resolved) };
}

function getPropertyAccessPath(expression: Expression): readonly string[] | undefined {
  if (Node.isIdentifier(expression)) return [expression.getText()];
  if (Node.isPropertyAccessExpression(expression)) {
    const target = getPropertyAccessPath(expression.getExpression());
    return target ? [...target, expression.getName()] : undefined;
  }
  return undefined;
}

function resolveImportedCfgReference(
  pathSegments: readonly string[],
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
): string | undefined {
  const entries = Object.entries(bindings.importedLocalNames).filter(
    ([exportedName, localName]) =>
      localName && isCfgRootName(exportedName) && pathSegments[0] === localName,
  ) as [CfgRootName, string][];

  const entry = entries[0];
  if (!entry) return undefined;
  return resolveCfgReference(semanticContext, entry[0], pathSegments.slice(1));
}

function isCfgRootName(value: string): value is CfgRootName {
  return value === "cfgWeapons" || value === "cfgWeaponsItems" || value === "cfgMagazines";
}

// ─── scope helpers ───────────────────────────────────────────────────────────

interface LoweringScope {
  readonly localNames: Set<string>;
}

function createScope(): LoweringScope {
  return { localNames: new Set() };
}

function cloneScope(scope: LoweringScope): LoweringScope {
  return { localNames: new Set(scope.localNames) };
}

function addLocalName(scope: LoweringScope, name: string): LoweringScope {
  scope.localNames.add(name);
  return scope;
}

function addLocalNames(scope: LoweringScope, names: readonly string[]): LoweringScope {
  for (const name of names) scope.localNames.add(name);
  return scope;
}

function resolveIdentifierText(name: string, scope: LoweringScope): string {
  return scope.localNames.has(name) ? `_${name}` : name;
}
