import { Node, SyntaxKind, type Expression } from "ts-morph";
import type {
  SqfArrayExpression,
  SqfCallExpression,
  SqfCommandExpression,
  SqfConditionalExpression,
  SqfExpression,
  SqfIdentifier,
  SqfLiteral,
  SqfPropertyAccessExpression,
  SqfUnaryExpression,
} from "../ir/nodes";
import { sqfMethodCommandRegistry } from "../semantic/command-registry";
import type { CfgRootName } from "../semantic/context";
import { resolveCfgReference } from "../semantic/context";
import { tryLowerClassExpression } from "./class-expression-lowering";
import type { LoweringContext } from "./lowering-context";
import { lowerBinaryOperator } from "./lower-operators";
import { resolveIdentifierText } from "./lowering-scope";

export function lowerExpression(
  expression: Expression,
  context: LoweringContext,
): SqfExpression {
  const classExpr = tryLowerClassExpression(
    expression,
    context.diagnostics,
    context.bindings,
    context.semanticContext,
    context.scope,
    (nestedExpression) => lowerExpression(nestedExpression, context),
  );
  if (classExpr) return classExpr;

  const commandExpr = tryLowerSpecialCommandExpression(expression, context);
  if (commandExpr) return commandExpr;

  const cfgLiteral = tryLowerCfgLiteral(expression, context);
  if (cfgLiteral) return cfgLiteral;

  if (Node.isParenthesizedExpression(expression)) {
    return lowerExpression(expression.getExpression(), context);
  }
  if (Node.isIdentifier(expression)) {
    return {
      kind: "Identifier",
      text: resolveIdentifierText(expression.getText(), context.scope),
    } satisfies SqfIdentifier;
  }
  if (
    Node.isStringLiteral(expression)
    || Node.isNumericLiteral(expression)
    || expression.getKind() === SyntaxKind.TrueKeyword
    || expression.getKind() === SyntaxKind.FalseKeyword
  ) {
    return { kind: "Literal", text: expression.getText() } satisfies SqfLiteral;
  }

  if (Node.isCallExpression(expression)) {
    const callee = expression.getExpression();
    const args = expression
      .getArguments()
      .filter(Node.isExpression)
      .map((argument) => lowerExpression(argument, context));

    if (Node.isIdentifier(callee)) {
      const sqfName = context.bindings.importedProjectFunctions.get(callee.getText());
      if (sqfName) {
        return {
          kind: "CallExpression",
          callee: { kind: "Identifier", text: sqfName },
          args,
        } satisfies SqfCallExpression;
      }

      const commandName = context.bindings.sqfCommandFunctions.get(callee.getText());
      if (commandName !== undefined) {
        if (args.length <= 1) {
          return { kind: "CommandExpression", command: commandName, args } satisfies SqfCommandExpression;
        }
        return {
          kind: "CommandExpression",
          receiver: args[0]!,
          command: commandName,
          args: args.slice(1),
        } satisfies SqfCommandExpression;
      }
    }

    return {
      kind: "CallExpression",
      callee: lowerExpression(callee, context),
      args,
    } satisfies SqfCallExpression;
  }

  if (Node.isPropertyAccessExpression(expression)) {
    if (Node.isThisExpression(expression.getExpression())) {
      return {
        kind: "CommandExpression",
        receiver: { kind: "Identifier", text: "_self" },
        command: "get",
        args: [{ kind: "Literal", text: JSON.stringify(expression.getName()) }],
      } satisfies SqfCommandExpression;
    }
    return {
      kind: "PropertyAccessExpression",
      target: lowerExpression(expression.getExpression(), context),
      property: expression.getName(),
    } satisfies SqfPropertyAccessExpression;
  }

  if (Node.isArrayLiteralExpression(expression)) {
    return {
      kind: "ArrayExpression",
      elements: expression
        .getElements()
        .map((element) => lowerExpression(element as Expression, context)),
    } satisfies SqfArrayExpression;
  }

  if (Node.isBinaryExpression(expression)) {
    return {
      kind: "BinaryExpression",
      operator: lowerBinaryOperator(
        expression.getOperatorToken().getText(),
        expression,
        context.diagnostics,
      ),
      left: lowerExpression(expression.getLeft(), context),
      right: lowerExpression(expression.getRight(), context),
    };
  }

  if (Node.isConditionalExpression(expression)) {
    return {
      kind: "ConditionalExpression",
      condition: lowerExpression(expression.getCondition(), context),
      whenTrue: lowerExpression(expression.getWhenTrue(), context),
      whenFalse: lowerExpression(expression.getWhenFalse(), context),
    } satisfies SqfConditionalExpression;
  }

  if (Node.isPrefixUnaryExpression(expression)) {
    const operand = lowerExpression(expression.getOperand(), context);
    if (expression.getOperatorToken() === SyntaxKind.ExclamationToken) {
      return { kind: "UnaryExpression", operator: "!", operand } satisfies SqfUnaryExpression;
    }
    if (expression.getOperatorToken() === SyntaxKind.MinusToken) {
      return { kind: "UnaryExpression", operator: "-", operand } satisfies SqfUnaryExpression;
    }
  }

  context.diagnostics.add({
    code: "LANCE_UNSUPPORTED_EXPRESSION",
    severity: "warning",
    phase: "lowering",
    message: `Unsupported expression kind: ${expression.getKindName()}`,
    span: { filePath: expression.getSourceFile().getFilePath(), line: expression.getStartLineNumber() },
  });
  return { kind: "Literal", text: expression.getText() };
}

function tryLowerSpecialCommandExpression(
  expression: Expression,
  context: LoweringContext,
): SqfCommandExpression | undefined {
  if (!Node.isCallExpression(expression)) return undefined;
  const callee = expression.getExpression();
  if (!Node.isPropertyAccessExpression(callee)) return undefined;
  const receiverExpr = callee.getExpression();
  if (!Node.isIdentifier(receiverExpr)) return undefined;

  const spec = sqfMethodCommandRegistry.find(
    (entry) =>
      context.bindings.importedLocalNames[entry.exportedReceiverName] === receiverExpr.getText()
      && entry.methodName === callee.getName(),
  );
  if (!spec) return undefined;

  return {
    kind: "CommandExpression",
    receiver: { kind: "Identifier", text: spec.exportedReceiverName },
    command: spec.emittedCommand,
    args: expression
      .getArguments()
      .filter(Node.isExpression)
      .map((argument) => lowerExpression(argument, context)),
  };
}

function tryLowerCfgLiteral(
  expression: Expression,
  context: LoweringContext,
): SqfLiteral | undefined {
  const path = getPropertyAccessPath(expression);
  if (!path) return undefined;

  const rootName = Object.entries(context.bindings.importedLocalNames).find(
    ([exportedName, localName]) => localName === path[0] && isCfgRootName(exportedName),
  )?.[0];
  if (!rootName) return undefined;

  const resolved = resolveImportedCfgReference(path, context);
  if (!resolved) {
    context.diagnostics.add({
      code: "LANCE_UNRESOLVED_CFG_REFERENCE",
      severity: "error",
      phase: "lowering",
      message: `Could not resolve cfg reference: ${path.join(".")}`,
      span: { filePath: expression.getSourceFile().getFilePath(), line: expression.getStartLineNumber() },
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
  context: LoweringContext,
): string | undefined {
  const entries = Object.entries(context.bindings.importedLocalNames).filter(
    ([exportedName, localName]) =>
      localName && isCfgRootName(exportedName) && pathSegments[0] === localName,
  ) as [CfgRootName, string][];
  const entry = entries[0];
  if (!entry) return undefined;
  return resolveCfgReference(context.semanticContext, entry[0], pathSegments.slice(1));
}

function isCfgRootName(value: string): value is CfgRootName {
  return value === "cfgWeapons" || value === "cfgWeaponsItems" || value === "cfgMagazines";
}
