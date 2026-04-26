import { basename } from "node:path";
import type { DiagnosticBag } from "../compiler/diagnostics";
import type {
  SqfArrayExpression,
  SqfBinaryExpression,
  SqfCallExpression,
  SqfCodeBlock,
  SqfCommandExpression,
  SqfExpression,
  SqfFunctionFile,
  SqfIfStatement,
  SqfProgram,
  SqfReturnStatement,
  SqfStatement,
  SqfVariableStatement,
  SqfWhileStatement,
} from "../ir/nodes";

export interface OutputFile {
  readonly path: string;    // relative to outDir
  readonly content: string;
}

export function emitSqfProgram(
  program: SqfProgram,
  _diagnostics: DiagnosticBag,
): readonly OutputFile[] {
  const files: OutputFile[] = [];

  // Entry file — top-level statements from the entry TypeScript file
  const entryName = basename(program.entryFilePath, ".ts") + ".sqf";
  const entryContent = program.entryStatements.map(emitSqfStatement).join("\n");
  files.push({ path: entryName, content: entryContent });

  // One file per function
  for (const fnFile of program.functionFiles) {
    files.push({ path: fnFile.outputPath, content: emitFunctionFile(fnFile) });
  }

  return files;
}

// ─── function file ───────────────────────────────────────────────────────────

function emitFunctionFile(file: SqfFunctionFile): string {
  const paramsLine =
    file.parameters.length > 0
      ? `    params [${file.parameters.map((p) => JSON.stringify(`_${p}`)).join(", ")}];`
      : null;

  return [
    `${file.sqfName} = {`,
    ...(paramsLine ? [paramsLine] : []),
    ...file.body.map((s) => `    ${emitSqfStatement(s)}`),
    "};",
  ].join("\n");
}

// ─── statements ──────────────────────────────────────────────────────────────

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
  }
}

function emitVariableStatement(statement: SqfVariableStatement): string {
  const init = statement.initializer ? ` = ${emitSqfExpression(statement.initializer)}` : "";
  return `private _${statement.name}${init};`;
}

function emitReturnStatement(statement: SqfReturnStatement): string {
  return statement.expression ? `return ${emitSqfExpression(statement.expression)};` : "return;";
}

function emitIfStatement(statement: SqfIfStatement): string {
  const lines = [
    `if (${emitSqfExpression(statement.condition)}) then {`,
    ...statement.thenStatements.map((s) => `    ${emitSqfStatement(s)}`),
    `}${statement.elseStatements.length > 0 ? " else {" : ""}`,
    ...statement.elseStatements.map((s) => `    ${emitSqfStatement(s)}`),
    statement.elseStatements.length > 0 ? "};" : ";",
  ];
  return lines.join("\n");
}

function emitWhileStatement(statement: SqfWhileStatement): string {
  return [
    `while {${emitSqfExpression(statement.condition)}} do {`,
    ...statement.body.map((s) => `    ${emitSqfStatement(s)}`),
    "};",
  ].join("\n");
}

// ─── expressions ─────────────────────────────────────────────────────────────

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
      return `${emitSqfExpression(expression.target)}.${expression.property}`;
    case "ArrayExpression":
      return `[${expression.elements.map(emitSqfExpression).join(", ")}]`;
    case "BinaryExpression":
      return emitBinaryExpression(expression);
    case "CodeBlock":
      return emitCodeBlock(expression);
  }
}

function emitCallExpression(expression: SqfCallExpression): string {
  const callee = emitSqfExpression(expression.callee);
  if (expression.args.length === 0) return `[] call ${callee}`;
  if (expression.args.length === 1) return `${emitSqfExpression(expression.args[0]!)} call ${callee}`;
  return `[${expression.args.map(emitSqfExpression).join(", ")}] call ${callee}`;
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

function emitBinaryExpression(expression: SqfBinaryExpression): string {
  return `${emitSqfExpression(expression.left)} ${expression.operator} ${emitSqfExpression(expression.right)}`;
}

function emitCodeBlock(block: SqfCodeBlock): string {
  if (block.body.length === 0) return "{}";
  return [
    "{",
    ...block.body.map((s) => `    ${emitSqfStatement(s)}`),
    "}",
  ].join("\n");
}
