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
  readonly sqfName: string;       // e.g. "LNC_medical_fnc_healSquad"
  readonly outputPath: string;    // e.g. "functions/medical/fn_healSquad.sqf"
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
  | SqfReturnStatement
  | SqfIfStatement
  | SqfWhileStatement;

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

export interface SqfReturnStatement {
  readonly kind: "ReturnStatement";
  readonly expression?: SqfExpression;
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

export type SqfExpression =
  | SqfIdentifier
  | SqfLiteral
  | SqfCallExpression
  | SqfCommandExpression
  | SqfPropertyAccessExpression
  | SqfArrayExpression
  | SqfBinaryExpression
  | SqfCodeBlock;

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

export interface SqfCommandExpression {
  readonly kind: "CommandExpression";
  readonly receiver: SqfExpression;
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
