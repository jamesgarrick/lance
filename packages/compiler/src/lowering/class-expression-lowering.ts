import { Node, type Expression } from "ts-morph";
import type { DiagnosticBag } from "../compiler/diagnostics";
import type { SqfExpression } from "../ir/nodes";
import type { SemanticContext } from "../semantic/context";
import type { LoweringScope } from "./lowering-scope";
import type { SourceFileSemanticBindings } from "./source-file-bindings";

export function tryLowerClassExpression(
  expression: Expression,
  diagnostics: DiagnosticBag,
  bindings: SourceFileSemanticBindings,
  semanticContext: SemanticContext,
  scope: LoweringScope,
  lowerExpression: (
    expression: Expression,
    diagnostics: DiagnosticBag,
    bindings: SourceFileSemanticBindings,
    semanticContext: SemanticContext,
    scope: LoweringScope,
  ) => SqfExpression,
): SqfExpression | undefined {
  if (Node.isNewExpression(expression)) {
    const className = expression.getExpression().getText();
    const ctor = bindings.classConstructors.get(className);
    if (!ctor) return undefined;
    const args = expression
      .getArguments()
      .filter(Node.isExpression)
      .map((a) => lowerExpression(a, diagnostics, bindings, semanticContext, scope));
    return {
      kind: "CallExpression",
      callee: { kind: "Identifier", text: ctor.sqfName },
      args,
    };
  }

  if (Node.isCallExpression(expression)) {
    const callee = expression.getExpression();
    if (!Node.isPropertyAccessExpression(callee)) return undefined;

    const methodName = callee.getName();
    const receiver = callee.getExpression();
    const args = expression
      .getArguments()
      .filter(Node.isExpression)
      .map((a) => lowerExpression(a, diagnostics, bindings, semanticContext, scope));

    if (Node.isIdentifier(receiver)) {
      const staticCall = bindings.classStaticMethods.get(`${receiver.getText()}.${methodName}`);
      if (staticCall) {
        return {
          kind: "CallExpression",
          callee: { kind: "Identifier", text: staticCall.sqfName },
          args,
        };
      }
    }

    const receiverClassName = receiver.getType().getSymbol()?.getName();
    if (!receiverClassName) return undefined;
    const method = bindings.classInstanceMethods.get(`${receiverClassName}.${methodName}`);
    if (!method) return undefined;

    return {
      kind: "CallExpression",
      callee: { kind: "Identifier", text: method.sqfName },
      args: [lowerExpression(receiver, diagnostics, bindings, semanticContext, scope), ...args],
    };
  }

  if (Node.isBinaryExpression(expression) && expression.getOperatorToken().getText() === "=") {
    const left = expression.getLeft();
    if (!Node.isPropertyAccessExpression(left)) return undefined;
    if (!Node.isThisExpression(left.getExpression())) return undefined;
    const fieldName = left.getName();
    return {
      kind: "CommandExpression",
      receiver: { kind: "Identifier", text: "_self" },
      command: "set",
      args: [
        {
          kind: "ArrayExpression",
          elements: [
            { kind: "Literal", text: JSON.stringify(fieldName) },
            lowerExpression(expression.getRight(), diagnostics, bindings, semanticContext, scope),
          ],
        },
      ],
    };
  }

  if (Node.isBinaryExpression(expression) && expression.getOperatorToken().getText() === "instanceof") {
    const right = expression.getRight();
    if (!Node.isIdentifier(right)) return undefined;
    return {
      kind: "BinaryExpression",
      operator: "!=",
      left: {
        kind: "CommandExpression",
        receiver: {
          kind: "CommandExpression",
          receiver: lowerExpression(expression.getLeft(), diagnostics, bindings, semanticContext, scope),
          command: "get",
          args: [{ kind: "Literal", text: JSON.stringify("_types") }],
        },
        command: "find",
        args: [{ kind: "Literal", text: JSON.stringify(right.getText()) }],
      },
      right: { kind: "Literal", text: "-1" },
    };
  }

  return undefined;
}
