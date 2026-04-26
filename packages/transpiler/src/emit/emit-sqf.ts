import type { DiagnosticBag } from "../compiler/diagnostics";
import type {
  SqfArrayExpression,
  SqfBinaryExpression,
  SqfCallExpression,
  SqfCommandExpression,
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
  const paramsLine =
    statement.parameters.length > 0
      ? `  params [${statement.parameters.map((parameter) => JSON.stringify(`_${parameter}`)).join(", ")}];`
      : undefined;
  return [
    `${statement.name} = {`,
    ...(paramsLine ? [paramsLine] : []),
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
    case "CommandExpression":
      return emitCommandExpression(expression);
    case "PropertyAccessExpression":
      return emitPropertyAccessExpression(expression);
    case "ArrayExpression":
      return `[${expression.elements.map(emitSqfExpression).join(", ")}]`;
    case "BinaryExpression":
      return emitBinaryExpression(expression);
  }
}

function emitCallExpression(expression: SqfCallExpression): string {
  const callee = emitSqfExpression(expression.callee);

  if (expression.args.length === 0) {
    return `[] call ${callee}`;
  }

  if (expression.args.length === 1) {
    return `${emitSqfExpression(expression.args[0]!)} call ${callee}`;
  }

  const args = expression.args.map(emitSqfExpression).join(", ");
  return `[${args}] call ${callee}`;
}

function emitCommandExpression(expression: SqfCommandExpression): string {
  if (expression.args.length === 0) {
    return `${emitSqfExpression(expression.receiver)} ${expression.command}`;
  }

  if (expression.args.length === 1) {
    return `${emitSqfExpression(expression.receiver)} ${expression.command} ${emitSqfExpression(expression.args[0]!)}`;
  }

  return `${emitSqfExpression(expression.receiver)} ${expression.command} [${expression.args.map(emitSqfExpression).join(", ")}]`;
}

function emitPropertyAccessExpression(expression: SqfPropertyAccessExpression): string {
  return `${emitSqfExpression(expression.target)}.${expression.property}`;
}

function emitBinaryExpression(expression: SqfBinaryExpression): string {
  return `${emitSqfExpression(expression.left)} ${expression.operator} ${emitSqfExpression(expression.right)}`;
}
