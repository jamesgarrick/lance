import {
  Node,
  SyntaxKind,
  type ImportDeclaration,
  type Expression,
  type SourceFile,
  type Statement,
} from "ts-morph";
import type { DiagnosticBag } from "../compiler/diagnostics";
import type { CompilerOptions } from "../compiler/options";
import type {
  SqfArrayExpression,
  SqfBinaryExpression,
  SqfCallExpression,
  SqfCommandExpression,
  SqfExpression,
  SqfExpressionStatement,
  SqfFunctionDeclaration,
  SqfIdentifier,
  SqfIfStatement,
  SqfLiteral,
  SqfPropertyAccessExpression,
  SqfReturnStatement,
  SqfSourceFile,
  SqfStatement,
  SqfVariableStatement,
  SqfWhileStatement,
} from "../ir/nodes";
import { sqfMethodCommandRegistry } from "../semantic/command-registry";
import type { CfgRootName, SemanticContext } from "../semantic/context";
import { resolveCfgReference } from "../semantic/context";

interface SourceFileSemanticBindings {
  readonly importedLocalNames: Readonly<Record<string, string | undefined>>;
}

export function lowerSourceFile(
  sourceFile: SourceFile,
  diagnostics: DiagnosticBag,
  _options: CompilerOptions,
  semanticContext: SemanticContext,
): SqfSourceFile {
  const bindings = collectSemanticBindings(sourceFile);

  return {
    kind: "SourceFile",
    filePath: sourceFile.getFilePath(),
    statements: sourceFile
      .getStatements()
      .filter((statement) => !Node.isImportDeclaration(statement))
      .map((statement) =>
        lowerStatement(statement, diagnostics, bindings, semanticContext),
      ),
  };
}

function lowerStatement(
  statement: Statement,
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
): SqfStatement {
  if (Node.isVariableStatement(statement)) {
    const declaration = statement.getDeclarations()[0];
    return {
      kind: "VariableStatement",
      name: declaration?.getName() ?? "unknown",
      initializer: declaration?.getInitializer()
        ? lowerExpression(
            declaration.getInitializerOrThrow(),
            diagnostics,
            bindings,
            semanticContext,
          )
        : undefined,
    } satisfies SqfVariableStatement;
  }

  if (Node.isExpressionStatement(statement)) {
    return {
      kind: "ExpressionStatement",
      expression: lowerExpression(
        statement.getExpression(),
        diagnostics,
        bindings,
        semanticContext,
      ),
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
      ),
      thenStatements: lowerStatementBlock(
        statement.getThenStatement(),
        diagnostics,
        bindings,
        semanticContext,
      ),
      elseStatements: elseStatement
        ? lowerStatementBlock(elseStatement, diagnostics, bindings, semanticContext)
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
      ),
      body: lowerStatementBlock(
        statement.getStatement(),
        diagnostics,
        bindings,
        semanticContext,
      ),
    } satisfies SqfWhileStatement;
  }

  if (Node.isFunctionDeclaration(statement)) {
    const body = statement.getBody();
    return {
      kind: "FunctionDeclaration",
      name: statement.getName() ?? "anonymous",
      parameters: statement.getParameters().map((parameter) => parameter.getName()),
      body:
        body && Node.isBlock(body)
          ? body.getStatements().map((innerStatement) =>
              lowerStatement(innerStatement, diagnostics, bindings, semanticContext),
            )
          : [],
    } satisfies SqfFunctionDeclaration;
  }

  diagnostics.add({
    code: "UNSUPPORTED_STATEMENT",
    severity: "warning",
    phase: "lowering",
    message: `Unsupported statement kind: ${statement.getKindName()}`,
    span: {
      filePath: statement.getSourceFile().getFilePath(),
      line: statement.getStartLineNumber(),
    },
  });

  return {
    kind: "RawTsStatement",
    text: statement.getText(),
  };
}

function lowerStatementBlock(
  statement: Statement,
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
): readonly SqfStatement[] {
  if (Node.isBlock(statement)) {
    return statement.getStatements().map((innerStatement) =>
      lowerStatement(innerStatement, diagnostics, bindings, semanticContext),
    );
  }

  return [lowerStatement(statement, diagnostics, bindings, semanticContext)];
}

function lowerExpression(
  expression: Expression,
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
): SqfExpression {
  const commandExpression = tryLowerSpecialCommandExpression(
    expression,
    diagnostics,
    bindings,
    semanticContext,
  );
  if (commandExpression) {
    return commandExpression;
  }

  const cfgLiteral = tryLowerCfgLiteral(expression, bindings, semanticContext);
  if (cfgLiteral) {
    return cfgLiteral;
  }

  if (Node.isIdentifier(expression)) {
    return {
      kind: "Identifier",
      text: expression.getText(),
    } satisfies SqfIdentifier;
  }

  if (
    Node.isStringLiteral(expression) ||
    Node.isNumericLiteral(expression) ||
    expression.getKind() === SyntaxKind.TrueKeyword ||
    expression.getKind() === SyntaxKind.FalseKeyword
  ) {
    return {
      kind: "Literal",
      text: expression.getText(),
    } satisfies SqfLiteral;
  }

  if (Node.isCallExpression(expression)) {
    return {
      kind: "CallExpression",
      callee: lowerExpression(
        expression.getExpression(),
        diagnostics,
        bindings,
        semanticContext,
      ),
      args: expression
        .getArguments()
        .filter(Node.isExpression)
        .map((argument) =>
          lowerExpression(argument, diagnostics, bindings, semanticContext),
        ),
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
      ),
      property: expression.getName(),
    } satisfies SqfPropertyAccessExpression;
  }

  if (Node.isArrayLiteralExpression(expression)) {
    return {
      kind: "ArrayExpression",
      elements: expression
        .getElements()
        .map((element) =>
          lowerArrayElement(element, diagnostics, bindings, semanticContext),
        ),
    } satisfies SqfArrayExpression;
  }

  if (Node.isBinaryExpression(expression)) {
    return {
      kind: "BinaryExpression",
      operator: expression.getOperatorToken().getText(),
      left: lowerExpression(
        expression.getLeft(),
        diagnostics,
        bindings,
        semanticContext,
      ),
      right: lowerExpression(
        expression.getRight(),
        diagnostics,
        bindings,
        semanticContext,
      ),
    } satisfies SqfBinaryExpression;
  }

  diagnostics.add({
    code: "UNSUPPORTED_EXPRESSION",
    severity: "warning",
    phase: "lowering",
    message: `Unsupported expression kind: ${expression.getKindName()}`,
    span: {
      filePath: expression.getSourceFile().getFilePath(),
      line: expression.getStartLineNumber(),
    },
  });

  return {
    kind: "Literal",
    text: expression.getText(),
  };
}

function lowerArrayElement(
  element: Node,
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
): SqfExpression {
  if (Node.isExpression(element)) {
    return lowerExpression(element, diagnostics, bindings, semanticContext);
  }

  return {
    kind: "Literal",
    text: element.getText(),
  } satisfies SqfLiteral;
}

function collectSemanticBindings(sourceFile: SourceFile): SourceFileSemanticBindings {
  const lanceImport = sourceFile
    .getImportDeclarations()
    .find((importDeclaration) => importDeclaration.getModuleSpecifierValue() === "lance-sqf-types");

  return {
    importedLocalNames: {
      player: getNamedImportLocalName(lanceImport, "player"),
      cfgWeapons: getNamedImportLocalName(lanceImport, "cfgWeapons"),
      cfgWeaponsItems: getNamedImportLocalName(lanceImport, "cfgWeaponsItems"),
      cfgMagazines: getNamedImportLocalName(lanceImport, "cfgMagazines"),
    },
  };
}

function getNamedImportLocalName(
  importDeclaration: ImportDeclaration | undefined,
  exportedName: string,
): string | undefined {
  const namedImport = importDeclaration
    ?.getNamedImports()
    .find((entry) => entry.getName() === exportedName);

  return namedImport?.getAliasNode()?.getText() ?? namedImport?.getName();
}

function tryLowerSpecialCommandExpression(
  expression: Expression,
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
): SqfCommandExpression | undefined {
  if (!Node.isCallExpression(expression)) {
    return undefined;
  }

  const callee = expression.getExpression();
  if (!Node.isPropertyAccessExpression(callee)) {
    return undefined;
  }

  const receiverExpression = callee.getExpression();
  if (!Node.isIdentifier(receiverExpression)) {
    return undefined;
  }

  const spec = sqfMethodCommandRegistry.find(
    (entry) =>
      bindings.importedLocalNames[entry.exportedReceiverName] === receiverExpression.getText() &&
      entry.methodName === callee.getName(),
  );
  if (!spec) {
    return undefined;
  }

  const receiver: SqfIdentifier = {
    kind: "Identifier",
    text: spec.exportedReceiverName,
  };

  const args = expression
    .getArguments()
    .filter(Node.isExpression)
    .map((argument) =>
      lowerExpression(argument, diagnostics, bindings, semanticContext),
    );

  return {
    kind: "CommandExpression",
    receiver,
    command: spec.emittedCommand,
    args,
  };
}

function tryLowerCfgLiteral(
  expression: Expression,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
): SqfLiteral | undefined {
  const pathSegments = getPropertyAccessPath(expression);
  if (!pathSegments) {
    return undefined;
  }

  const resolvedCfgReference = resolveImportedCfgReference(
    pathSegments,
    bindings,
    semanticContext,
  );

  if (!resolvedCfgReference) {
    return undefined;
  }

  return {
    kind: "Literal",
    text: JSON.stringify(resolvedCfgReference),
  };
}

function getPropertyAccessPath(expression: Expression): readonly string[] | undefined {
  if (Node.isIdentifier(expression)) {
    return [expression.getText()];
  }

  if (Node.isPropertyAccessExpression(expression)) {
    const targetPath = getPropertyAccessPath(expression.getExpression());
    return targetPath ? [...targetPath, expression.getName()] : undefined;
  }

  return undefined;
}

function resolveImportedCfgReference(
  pathSegments: readonly string[],
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
): string | undefined {
  const cfgRootEntries = Object.entries(bindings.importedLocalNames).filter(
    ([exportedName, localName]) =>
      localName &&
      isCfgRootName(exportedName) &&
      pathSegments[0] === localName,
  ) as [CfgRootName, string][];

  const entry = cfgRootEntries[0];
  if (!entry) {
    return undefined;
  }

  const [rootName] = entry;
  return resolveCfgReference(semanticContext, rootName, pathSegments.slice(1));
}

function isCfgRootName(value: string): value is CfgRootName {
  return value === "cfgWeapons" || value === "cfgWeaponsItems" || value === "cfgMagazines";
}
