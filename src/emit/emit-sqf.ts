import type { DiagnosticBag } from "../compiler/diagnostics";
import type {
  SqfArrayExpression,
  SqfBinaryExpression,
  SqfCallExpression,
  SqfExpression,
  SqfFunctionDeclaration,
  SqfIfStatement,
  SqfProgram,
  SqfPropertyAccessExpression,
  SqfReturnStatement,
  SqfSourceFile,
  SqfStatement,
  SqfVariableStatement,
  SqfWhileStatement,
} from "../ir/nodes";

export function emitSqfProgram(
  program: SqfProgram,
  _diagnostics: DiagnosticBag,
): string {
  return program.sourceFiles.map(emitSqfSourceFile).join("\n\n");
}

function emitSqfSourceFile(sourceFile: SqfSourceFile): string {
  const header = `/* ${sourceFile.filePath} */`;
  const body = sourceFile.statements.map(emitSqfStatement).join("\n");
  return `${header}\n${body}`.trim();
}

function emitSqfStatement(statement: SqfStatement): string {
  switch (statement.kind) {
    case "RawTsStatement":
      return `/* unsupported: ${statement.text} */`;
    case "VariableStatement":
      return emitVariableStatement(statement);
    case "ExpressionStatement":
      return `${emitSqfExpression(statement.expression)};`;
    case "ReturnStatement":
      return emitReturnStatement(statement);
    case "IfStatement":
      return emitIfStatement(statement);
    case "WhileStatement":
      return emitWhileStatement(statement);
    case "FunctionDeclaration":
      return emitFunctionDeclaration(statement);
  }
}

function emitVariableStatement(statement: SqfVariableStatement): string {
  const initializer = statement.initializer
    ? ` = ${emitSqfExpression(statement.initializer)}`
    : "";
  return `private _${statement.name}${initializer};`;
}

function emitReturnStatement(statement: SqfReturnStatement): string {
  return statement.expression
    ? `return ${emitSqfExpression(statement.expression)};`
    : "return;";
}

function emitIfStatement(statement: SqfIfStatement): string {
  return [
    `if (${emitSqfExpression(statement.condition)}) then {`,
    ...statement.thenStatements.map((child) => `  ${emitSqfStatement(child)}`),
    `}${statement.elseStatements.length > 0 ? " else {" : ""}`,
    ...statement.elseStatements.map((child) => `  ${emitSqfStatement(child)}`),
    statement.elseStatements.length > 0 ? "};" : ";",
  ].join("\n");
}

function emitWhileStatement(statement: SqfWhileStatement): string {
  return [
    `while {${emitSqfExpression(statement.condition)}} do {`,
    ...statement.body.map((child) => `  ${emitSqfStatement(child)}`),
    "};",
  ].join("\n");
}

function emitFunctionDeclaration(statement: SqfFunctionDeclaration): string {
  const params = statement.parameters.join(", ");
  return [
    `${statement.name} = {`,
    `  /* params: ${params} */`,
    ...statement.body.map((child) => `  ${emitSqfStatement(child)}`),
    "};",
  ].join("\n");
}

function emitSqfExpression(expression: SqfExpression): string {
  switch (expression.kind) {
    case "Identifier":
      return expression.text;
    case "Literal":
      return expression.text;
    case "CallExpression":
      return emitCallExpression(expression);
    case "PropertyAccessExpression":
      return emitPropertyAccessExpression(expression);
    case "ArrayExpression":
      return `[${expression.elements.map(emitSqfExpression).join(", ")}]`;
    case "BinaryExpression":
      return emitBinaryExpression(expression);
  }
}

function emitCallExpression(expression: SqfCallExpression): string {
  const args = expression.args.map(emitSqfExpression).join(", ");
  return `${emitSqfExpression(expression.callee)}(${args})`;
}

function emitPropertyAccessExpression(expression: SqfPropertyAccessExpression): string {
  return `${emitSqfExpression(expression.target)}.${expression.property}`;
}

function emitBinaryExpression(expression: SqfBinaryExpression): string {
  return `${emitSqfExpression(expression.left)} ${expression.operator} ${emitSqfExpression(expression.right)}`;
}
