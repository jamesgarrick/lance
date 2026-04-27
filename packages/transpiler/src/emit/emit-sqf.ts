import { basename } from "node:path";
import type { DiagnosticBag } from "../compiler/diagnostics";
import type {
  SqfArrayExpression,
  SqfBinaryExpression,
  SqfCallExpression,
  SqfCodeBlock,
  SqfCommandExpression,
  SqfConditionalExpression,
  SqfExpression,
  SqfForEachStatement,
  SqfForFromToStatement,
  SqfFunctionFile,
  SqfIfExitWithStatement,
  SqfIfStatement,
  SqfProgram,
  SqfReturnStatement,
  SqfStatement,
  SqfSwitchStatement,
  SqfThrowStatement,
  SqfTrailingExpressionStatement,
  SqfUnaryExpression,
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
    case "TrailingExpressionStatement":
      return emitTrailingExpressionStatement(statement);
    case "ReturnStatement":
      return emitReturnStatement(statement);
    case "IfStatement":
      return emitIfStatement(statement);
    case "IfExitWithStatement":
      return emitIfExitWithStatement(statement);
    case "WhileStatement":
      return emitWhileStatement(statement);
    case "ForFromToStatement":
      return emitForFromToStatement(statement);
    case "ForEachStatement":
      return emitForEachStatement(statement);
    case "ThrowStatement":
      return emitThrowStatement(statement);
    case "SwitchStatement":
      return emitSwitchStatement(statement);
  }
}

function emitVariableStatement(statement: SqfVariableStatement): string {
  const init = statement.initializer ? ` = ${emitSqfExpression(statement.initializer)}` : "";
  return `private _${statement.name}${init};`;
}

function emitReturnStatement(statement: SqfReturnStatement): string {
  // Reaching emit means normalization couldn't simplify it (a diagnostic was already raised).
  // Emit as a comment so the SQF still parses; the diagnostic surfaces the real problem.
  const text = statement.expression ? emitSqfExpression(statement.expression) : "";
  return `/* unsupported: return ${text} */`;
}

function emitTrailingExpressionStatement(statement: SqfTrailingExpressionStatement): string {
  // No trailing semicolon: SQF blocks return their last expression, and the
  // idiomatic form omits the `;` to make that explicit.
  return emitSqfExpression(statement.expression);
}

function emitIfExitWithStatement(statement: SqfIfExitWithStatement): string {
  const body = statement.value ? ` ${emitSqfExpression(statement.value)} ` : "";
  return `if (${emitSqfExpression(statement.condition)}) exitWith {${body}};`;
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

function emitForFromToStatement(statement: SqfForFromToStatement): string {
  const stepClause = statement.step ? ` step ${emitSqfExpression(statement.step)}` : "";
  return [
    `for "_${statement.variable}" from ${emitSqfExpression(statement.from)} to ${emitSqfExpression(statement.to)}${stepClause} do {`,
    ...statement.body.map((s) => `    ${emitSqfStatement(s)}`),
    "};",
  ].join("\n");
}

function emitForEachStatement(statement: SqfForEachStatement): string {
  // If the user already named the loop var `_x`, no rebinding is needed (spec §3.3.5).
  const needsRebind = statement.variable !== "_x" && statement.variable !== "x";
  const bodyLines = needsRebind
    ? [
        `    private _${statement.variable} = _x;`,
        ...statement.body.map((s) => `    ${emitSqfStatement(s)}`),
      ]
    : statement.body.map((s) => `    ${emitSqfStatement(s)}`);

  return [
    "{",
    ...bodyLines,
    `} forEach ${emitSqfExpression(statement.iterable)};`,
  ].join("\n");
}

function emitThrowStatement(statement: SqfThrowStatement): string {
  return `throw ${emitSqfExpression(statement.expression)};`;
}

function emitSwitchStatement(statement: SqfSwitchStatement): string {
  const lines: string[] = [`switch (${emitSqfExpression(statement.discriminant)}) do {`];

  for (const branch of statement.cases) {
    // The "shared empty cases" pattern: every label except the last gets a bare
    // `case <label>;`, and the last carries the body. Spec §3.4.2.
    for (let i = 0; i < branch.labels.length - 1; i++) {
      lines.push(`    case ${emitSqfExpression(branch.labels[i]!)};`);
    }
    const finalLabel = branch.labels[branch.labels.length - 1]!;
    if (branch.body.length === 0) {
      lines.push(`    case ${emitSqfExpression(finalLabel)}: {};`);
    } else {
      lines.push(`    case ${emitSqfExpression(finalLabel)}: {`);
      for (const stmt of branch.body) lines.push(`        ${emitSqfStatement(stmt)}`);
      lines.push("    };");
    }
  }

  if (statement.defaultCase) {
    if (statement.defaultCase.length === 0) {
      lines.push("    default {};");
    } else {
      lines.push("    default {");
      for (const stmt of statement.defaultCase) lines.push(`        ${emitSqfStatement(stmt)}`);
      lines.push("    };");
    }
  }

  lines.push("};");
  return lines.join("\n");
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
    case "ConditionalExpression":
      return emitConditionalExpression(expression);
    case "UnaryExpression":
      return emitUnaryExpression(expression);
  }
}

function emitCallExpression(expression: SqfCallExpression): string {
  const callee = emitSqfExpression(expression.callee);
  if (expression.args.length === 0) return `[] call ${callee}`;
  if (expression.args.length === 1) return `${emitSqfExpression(expression.args[0]!)} call ${callee}`;
  return `[${expression.args.map(emitSqfExpression).join(", ")}] call ${callee}`;
}

function emitCommandExpression(expression: SqfCommandExpression): string {
  // Unary command (no receiver): `command arg` — e.g. `createHashMapFromArray [...]`.
  if (!expression.receiver) {
    if (expression.args.length === 0) return expression.command;
    if (expression.args.length === 1) {
      return `${expression.command} ${emitSqfExpression(expression.args[0]!)}`;
    }
    return `${expression.command} [${expression.args.map(emitSqfExpression).join(", ")}]`;
  }

  // Binary command form: `receiver command args`.
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

function emitConditionalExpression(expression: SqfConditionalExpression): string {
  // SQF idiom: `if (cond) then { a } else { b }` — used inline as a value.
  return `if (${emitSqfExpression(expression.condition)}) then { ${emitSqfExpression(expression.whenTrue)} } else { ${emitSqfExpression(expression.whenFalse)} }`;
}

function emitUnaryExpression(expression: SqfUnaryExpression): string {
  // Always parenthesize the operand so the prefix doesn't get tangled with adjacent operators.
  return `${expression.operator}(${emitSqfExpression(expression.operand)})`;
}
