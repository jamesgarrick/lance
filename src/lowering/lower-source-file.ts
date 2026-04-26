import {
  Node,
  SyntaxKind,
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

export function lowerSourceFile(
  sourceFile: SourceFile,
  diagnostics: DiagnosticBag,
  _options: CompilerOptions,
): SqfSourceFile {
  return {
    kind: "SourceFile",
    filePath: sourceFile.getFilePath(),
    statements: sourceFile
      .getStatements()
      .map((statement) => lowerStatement(statement, diagnostics)),
  };
}

function lowerStatement(
  statement: Statement,
  diagnostics: DiagnosticBag,
): SqfStatement {
  if (Node.isVariableStatement(statement)) {
    const declaration = statement.getDeclarations()[0];
    return {
      kind: "VariableStatement",
      name: declaration?.getName() ?? "unknown",
      initializer: declaration?.getInitializer()
        ? lowerExpression(declaration.getInitializerOrThrow(), diagnostics)
        : undefined,
    } satisfies SqfVariableStatement;
  }

  if (Node.isExpressionStatement(statement)) {
    return {
      kind: "ExpressionStatement",
      expression: lowerExpression(statement.getExpression(), diagnostics),
    } satisfies SqfExpressionStatement;
  }

  if (Node.isReturnStatement(statement)) {
    return {
      kind: "ReturnStatement",
      expression: statement.getExpression()
        ? lowerExpression(statement.getExpressionOrThrow(), diagnostics)
        : undefined,
    } satisfies SqfReturnStatement;
  }

  if (Node.isIfStatement(statement)) {
    const elseStatement = statement.getElseStatement();
    return {
      kind: "IfStatement",
      condition: lowerExpression(statement.getExpression(), diagnostics),
      thenStatements: lowerStatementBlock(statement.getThenStatement(), diagnostics),
      elseStatements: elseStatement ? lowerStatementBlock(elseStatement, diagnostics) : [],
    } satisfies SqfIfStatement;
  }

  if (Node.isWhileStatement(statement)) {
    return {
      kind: "WhileStatement",
      condition: lowerExpression(statement.getExpression(), diagnostics),
      body: lowerStatementBlock(statement.getStatement(), diagnostics),
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
              lowerStatement(innerStatement, diagnostics),
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
): readonly SqfStatement[] {
  if (Node.isBlock(statement)) {
    return statement.getStatements().map((innerStatement) =>
      lowerStatement(innerStatement, diagnostics),
    );
  }

  return [lowerStatement(statement, diagnostics)];
}

function lowerExpression(
  expression: Expression,
  diagnostics: DiagnosticBag,
): SqfExpression {
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
      callee: lowerExpression(expression.getExpression(), diagnostics),
      args: expression
        .getArguments()
        .filter(Node.isExpression)
        .map((argument) => lowerExpression(argument, diagnostics)),
    } satisfies SqfCallExpression;
  }

  if (Node.isPropertyAccessExpression(expression)) {
    return {
      kind: "PropertyAccessExpression",
      target: lowerExpression(expression.getExpression(), diagnostics),
      property: expression.getName(),
    } satisfies SqfPropertyAccessExpression;
  }

  if (Node.isArrayLiteralExpression(expression)) {
    return {
      kind: "ArrayExpression",
      elements: expression
        .getElements()
        .map((element) => lowerArrayElement(element, diagnostics)),
    } satisfies SqfArrayExpression;
  }

  if (Node.isBinaryExpression(expression)) {
    return {
      kind: "BinaryExpression",
      operator: expression.getOperatorToken().getText(),
      left: lowerExpression(expression.getLeft(), diagnostics),
      right: lowerExpression(expression.getRight(), diagnostics),
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
): SqfExpression {
  if (Node.isExpression(element)) {
    return lowerExpression(element, diagnostics);
  }

  return {
    kind: "Literal",
    text: element.getText(),
  } satisfies SqfLiteral;
}
