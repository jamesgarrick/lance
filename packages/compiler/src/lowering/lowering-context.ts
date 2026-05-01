import type { DiagnosticBag } from "../compiler/diagnostics";
import type { SqfExpression, SqfStatement } from "../ir/nodes";
import type { SemanticContext } from "../semantic/context";
import type { LoweringScope } from "./lowering-scope";
import type { SourceFileSemanticBindings } from "./source-file-bindings";
import type { Expression, Statement } from "ts-morph";

export interface LoweringContext {
	readonly diagnostics: DiagnosticBag;
	readonly bindings: SourceFileSemanticBindings;
	readonly semanticContext: SemanticContext;
	readonly scope: LoweringScope;
}

export interface LoweringDispatcher {
	readonly lowerExpression: (
		expression: Expression,
		context: LoweringContext,
	) => SqfExpression;
	readonly lowerStatement: (
		statement: Statement,
		context: LoweringContext,
	) => SqfStatement;
	readonly lowerStatementBlock: (
		statement: Statement,
		context: LoweringContext,
	) => readonly SqfStatement[];
}
