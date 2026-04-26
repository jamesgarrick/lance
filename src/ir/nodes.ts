export interface SqfProgram {
  readonly kind: "Program";
  readonly entryFilePaths: readonly string[];
  readonly sourceFiles: readonly SqfSourceFile[];
}

export interface SqfSourceFile {
  readonly kind: "SourceFile";
  readonly filePath: string;
  readonly statements: readonly SqfStatement[];
}

export type SqfStatement =
  | SqfRawTsStatement
  | SqfVariableStatement
  | SqfExpressionStatement
  | SqfReturnStatement
  | SqfIfStatement
  | SqfWhileStatement
  | SqfFunctionDeclaration;

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

export interface SqfFunctionDeclaration {
  readonly kind: "FunctionDeclaration";
  readonly name: string;
  readonly parameters: readonly string[];
  readonly body: readonly SqfStatement[];
}

export type SqfExpression =
  | SqfIdentifier
  | SqfLiteral
  | SqfCallExpression
  | SqfPropertyAccessExpression
  | SqfArrayExpression
  | SqfBinaryExpression;

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
