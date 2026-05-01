export interface SqfProgram {
	readonly kind: "Program";
	/** Absolute path of the entry TypeScript file. */
	readonly entryFilePath: string;
	/** Top-level non-function statements from the entry file → emitted into the entry .sqf */
	readonly entryStatements: readonly SqfStatement[];
	/** Every function declaration from all reachable files → each gets its own .sqf */
	readonly functionFiles: readonly SqfFunctionFile[];
}

export interface SqfFunctionFile {
	readonly kind: "FunctionFile";
	readonly sqfName: string; // e.g. "LNC_medical_fnc_healSquad"
	readonly outputPath: string; // e.g. "functions/medical/fn_healSquad.sqf"
	readonly category: string | null;
	readonly functionName: string;
	readonly tag: string;
	readonly parameters: readonly string[];
	readonly body: readonly SqfStatement[];
}

export type SqfStatement =
	| SqfRawTsStatement
	| SqfVariableStatement
	| SqfExpressionStatement
	| SqfTrailingExpressionStatement
	| SqfReturnStatement
	| SqfIfStatement
	| SqfIfExitWithStatement
	| SqfWhileStatement
	| SqfForFromToStatement
	| SqfForEachStatement
	| SqfThrowStatement
	| SqfSwitchStatement
	| SqfBreakStatement
	| SqfContinueStatement
	| SqfTryCatchStatement;

export interface SqfRawTsStatement {
	readonly kind: "RawTsStatement";
	readonly text: string;
}

export interface SqfVariableStatement {
	readonly kind: "VariableStatement";
	readonly name: string;
	readonly initializer?: SqfExpression;
}

export interface SqfExpressionStatement {
	readonly kind: "ExpressionStatement";
	readonly expression: SqfExpression;
}

/**
 * `return X` outside of an `if` body — at top level of a function block. After
 * normalization, the trailing return becomes a {@link SqfTrailingExpressionStatement}
 * (no `return` keyword) and intermediate returns become {@link SqfIfExitWithStatement}.
 *
 * If a `SqfReturnStatement` survives normalization, it indicates a return in a
 * position Lance can't yet lower (see docs/spec/control-flow.md §3.7.3).
 */
export interface SqfReturnStatement {
	readonly kind: "ReturnStatement";
	readonly expression?: SqfExpression;
}

/**
 * Bare expression at the end of a function body, emitted without a trailing
 * semicolon so SQF treats it as the block's return value. See spec §2.7 / §3.7.1.
 */
export interface SqfTrailingExpressionStatement {
	readonly kind: "TrailingExpressionStatement";
	readonly expression: SqfExpression;
}

/**
 * `if (cond) exitWith { value };` — the SQF idiom for an early return guarded by
 * a condition. Produced by normalization from `if (cond) return X;`.
 * See spec §3.7.2.
 */
export interface SqfIfExitWithStatement {
	readonly kind: "IfExitWithStatement";
	readonly condition: SqfExpression;
	readonly value?: SqfExpression;
}

export interface SqfIfStatement {
	readonly kind: "IfStatement";
	readonly condition: SqfExpression;
	readonly thenStatements: readonly SqfStatement[];
	readonly elseStatements: readonly SqfStatement[];
}

export interface SqfWhileStatement {
	readonly kind: "WhileStatement";
	readonly condition: SqfExpression;
	readonly body: readonly SqfStatement[];
}

/**
 * `for "_i" from A to B [step S] do { body }` — spec §3.3.1–§3.3.3.
 *
 * `variable` is the unmangled TS identifier (e.g. `"i"`); emit produces `"_i"`.
 */
export interface SqfForFromToStatement {
	readonly kind: "ForFromToStatement";
	readonly variable: string;
	readonly from: SqfExpression;
	readonly to: SqfExpression;
	readonly step?: SqfExpression;
	readonly body: readonly SqfStatement[];
}

/**
 * `{ body } forEach iterable` — spec §3.3.5.
 *
 * If `variable` is `"x"`, emit hoists the rebinding `private _<variable> = _x;` at the top of the body.
 * If it's already `"_x"`, the rebinding is elided.
 */
export interface SqfForEachStatement {
	readonly kind: "ForEachStatement";
	readonly variable: string;
	readonly iterable: SqfExpression;
	readonly body: readonly SqfStatement[];
}

/**
 * `throw <value>;` — spec §3.5.2 / §14.4. Lance enforces that `<value>` is a
 * structured Error instance (HashMap with `__class` etc.) but the IR itself
 * just carries an expression; the lowering layer is responsible for the shape.
 */
export interface SqfThrowStatement {
	readonly kind: "ThrowStatement";
	readonly expression: SqfExpression;
}

/**
 * `switch (d) do { case A: { body }; case B; case C: { body }; default { body }; }`
 * — spec §3.4.
 *
 * Each `SqfSwitchCase` may carry multiple labels (the "shared empty cases"
 * fallthrough pattern from §3.4.2). Executable fallthrough is rejected at
 * lowering time and never reaches the IR.
 */
export interface SqfSwitchStatement {
	readonly kind: "SwitchStatement";
	readonly discriminant: SqfExpression;
	readonly cases: readonly SqfSwitchCase[];
	readonly defaultCase?: readonly SqfStatement[];
}

export interface SqfSwitchCase {
	readonly labels: readonly SqfExpression[];
	readonly body: readonly SqfStatement[];
}

/** `break;` — exits the innermost loop. Spec §3.6.1. */
export interface SqfBreakStatement {
	readonly kind: "BreakStatement";
}

/**
 * `continue;` — skips to the next iteration of the innermost loop. Spec §3.6.2.
 * Lowering wraps the affected loop body in `call { ... }` and emits this as
 * `exitWith {}` so the inner block exits but the outer loop continues.
 */
export interface SqfContinueStatement {
	readonly kind: "ContinueStatement";
}

/**
 * `try { … } catch { … }` — spec §3.5. Catch always binds `_exception` (SQF's
 * implicit), and the catch parameter name (TS `catch (e)`) is rebound from
 * `_exception` at the top of the catch body.
 *
 * `finally` (when present) is emitted as a cleanup block running after the
 * try/catch — see spec §3.5.3. If the try or catch body contains any control
 * transfer (`return`, `throw`, `break`, `continue`), normalization surfaces a
 * diagnostic since the cleanup ordering is an open question.
 */
export interface SqfTryCatchStatement {
	readonly kind: "TryCatchStatement";
	readonly tryBody: readonly SqfStatement[];
	readonly catchParameterName?: string;
	readonly catchBody: readonly SqfStatement[];
	readonly finallyBody?: readonly SqfStatement[];
}

export type SqfExpression =
	| SqfIdentifier
	| SqfLiteral
	| SqfCallExpression
	| SqfCommandExpression
	| SqfPropertyAccessExpression
	| SqfArrayExpression
	| SqfBinaryExpression
	| SqfCodeBlock
	| SqfConditionalExpression
	| SqfUnaryExpression;

export interface SqfIdentifier {
	readonly kind: "Identifier";
	readonly text: string;
}

export interface SqfLiteral {
	readonly kind: "Literal";
	readonly text: string;
}

export interface SqfCallExpression {
	readonly kind: "CallExpression";
	readonly callee: SqfExpression;
	readonly args: readonly SqfExpression[];
}

/**
 * SQF command call. Models both the unary form (`command arg`) and the binary
 * form (`receiver command args`). When `receiver` is undefined, the command is
 * unary — used for built-ins like `createHashMapFromArray`, `count`, `alive`.
 */
export interface SqfCommandExpression {
	readonly kind: "CommandExpression";
	readonly receiver?: SqfExpression;
	readonly command: string;
	readonly args: readonly SqfExpression[];
}

export interface SqfPropertyAccessExpression {
	readonly kind: "PropertyAccessExpression";
	readonly target: SqfExpression;
	readonly property: string;
}

export interface SqfArrayExpression {
	readonly kind: "ArrayExpression";
	readonly elements: readonly SqfExpression[];
}

export interface SqfBinaryExpression {
	readonly kind: "BinaryExpression";
	readonly operator: string;
	readonly left: SqfExpression;
	readonly right: SqfExpression;
}

/** An inline SQF code block: { stmt; stmt; }. Used for async CPS callbacks. */
export interface SqfCodeBlock {
	readonly kind: "CodeBlock";
	readonly body: readonly SqfStatement[];
}

/** TypeScript ternary `cond ? a : b` → `if (cond) then { a } else { b }`. Spec §3.1.4. */
export interface SqfConditionalExpression {
	readonly kind: "ConditionalExpression";
	readonly condition: SqfExpression;
	readonly whenTrue: SqfExpression;
	readonly whenFalse: SqfExpression;
}

/** Prefix unary: `!x`, `-x`. Postfix `x++` is rewritten at lowering, never reaches the IR. */
export interface SqfUnaryExpression {
	readonly kind: "UnaryExpression";
	readonly operator: "!" | "-";
	readonly operand: SqfExpression;
}
