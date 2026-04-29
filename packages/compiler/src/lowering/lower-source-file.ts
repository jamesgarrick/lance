import { Node, type SourceFile } from "ts-morph";
import type { DiagnosticBag } from "../compiler/diagnostics";
import type { CompilerOptions } from "../compiler/options";
import type { FunctionRegistry } from "../compiler/project";
import type { SqfFunctionFile, SqfStatement } from "../ir/nodes";
import type { SemanticContext } from "../semantic/context";
import { collectClassModel, lowerClassDeclaration } from "./class-lowering";
import { lowerExpression } from "./lower-expressions";
import { lowerAsyncBody, lowerStatement } from "./lower-statements";
import { addLocalNames, createScope } from "./lowering-scope";
import { collectSemanticBindings, type SourceFileSemanticBindings } from "./source-file-bindings";
import type { LoweringContext } from "./lowering-context";

export interface LoweringResult {
  readonly entryStatements: readonly SqfStatement[];
  readonly functionFiles: readonly SqfFunctionFile[];
}

export function lowerSourceFile(
  sourceFile: SourceFile,
  isEntry: boolean,
  diagnostics: DiagnosticBag,
  options: CompilerOptions,
  semanticContext: SemanticContext,
  functionRegistry: FunctionRegistry,
): LoweringResult {
  const typesPackageName = options.typesPackageName ?? "@lance/core";
  const rawBindings = collectSemanticBindings(sourceFile, functionRegistry, typesPackageName);
  const classModel = collectClassModel(sourceFile, options.tag ?? "LNC");
  const bindings: SourceFileSemanticBindings = {
    ...rawBindings,
    classConstructors: classModel.constructors,
    classInstanceMethods: classModel.instanceMethods,
    classStaticMethods: classModel.staticMethods,
  };

  const scope = createScope();
  const entryStatements: SqfStatement[] = [];
  const functionFiles: SqfFunctionFile[] = [];

  for (const statement of sourceFile.getStatements()) {
    if (Node.isImportDeclaration(statement)) continue;

    if (Node.isFunctionDeclaration(statement)) {
      const name = statement.getName();
      if (!name) continue;
      const info = functionRegistry.get(`${sourceFile.getFilePath()}::${name}`);
      if (!info) continue;

      const parameters = statement.getParameters().map((p) => p.getName());
      const functionContext: LoweringContext = {
        diagnostics,
        bindings,
        semanticContext,
        scope: addLocalNames(createScope(), parameters),
      };
      const fnBody = statement.getBody();
      const rawStatements = fnBody && Node.isBlock(fnBody)
        ? fnBody.getStatements()
        : [];
      const loweredBody = statement.isAsync()
        ? lowerAsyncBody(rawStatements, functionContext)
        : rawStatements.map((childStatement) => lowerStatement(childStatement, functionContext));

      functionFiles.push({
        kind: "FunctionFile",
        sqfName: info.sqfName,
        outputPath: info.outputPath,
        category: info.category,
        functionName: info.functionName,
        tag: info.tag,
        parameters,
        body: loweredBody,
      });
      continue;
    }

    if (Node.isClassDeclaration(statement)) {
      functionFiles.push(
        ...lowerClassDeclaration(
          statement,
          diagnostics,
          bindings,
          semanticContext,
          classModel,
          options.tag ?? "LNC",
          lowerExpression,
          lowerStatement,
        ),
      );
      continue;
    }

    if (isEntry) {
      entryStatements.push(
        lowerStatement(statement, {
          diagnostics,
          bindings,
          semanticContext,
          scope,
        }),
      );
    }
  }

  return { entryStatements, functionFiles };
}
