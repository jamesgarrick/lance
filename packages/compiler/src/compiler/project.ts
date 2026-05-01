import { dirname } from "node:path";
import { Project, type SourceFile } from "ts-morph";
import {
	resolveSqfFunctionInfo,
	type SqfFunctionInfo,
} from "../naming/function-names";
import { defaultCompilerOptions, type CompilerOptions } from "./options";

/** Maps "absoluteFilePath::functionName" → SQF function info */
export type FunctionRegistry = Map<string, SqfFunctionInfo>;

export interface CompilerProject {
	readonly project: Project;
	readonly entrySourceFiles: readonly SourceFile[];
	readonly allSourceFiles: readonly SourceFile[];
	readonly functionRegistry: FunctionRegistry;
}

export function loadCompilerProject(options: CompilerOptions): CompilerProject {
	const project = options.tsConfigFilePath
		? new Project({ tsConfigFilePath: options.tsConfigFilePath })
		: new Project();

	const entrySourceFiles = options.entryFilePaths.map((p) =>
		project.addSourceFileAtPath(p),
	);

	const allSourceFiles = traverseImportGraph(entrySourceFiles);

	const sourceRoot =
		options.sourceRoot ??
		(options.entryFilePaths[0]
			? dirname(options.entryFilePaths[0])
			: process.cwd());

	const tag = options.tag ?? defaultCompilerOptions.tag;
	const functionRegistry = buildFunctionRegistry(
		allSourceFiles,
		sourceRoot,
		tag,
	);

	return { project, entrySourceFiles, allSourceFiles, functionRegistry };
}

function traverseImportGraph(roots: readonly SourceFile[]): SourceFile[] {
	const visited = new Set<string>();
	const result: SourceFile[] = [];

	function visit(file: SourceFile): void {
		const path = file.getFilePath();
		if (visited.has(path)) return;
		visited.add(path);
		result.push(file);

		for (const decl of file.getImportDeclarations()) {
			const specifier = decl.getModuleSpecifierValue();
			if (!specifier.startsWith(".")) continue;
			const resolved = decl.getModuleSpecifierSourceFile();
			if (resolved) visit(resolved);
		}
	}

	for (const root of roots) visit(root);
	return result;
}

function buildFunctionRegistry(
	sourceFiles: readonly SourceFile[],
	sourceRoot: string,
	tag: string,
): FunctionRegistry {
	const registry: FunctionRegistry = new Map();

	for (const file of sourceFiles) {
		for (const fn of file.getFunctions()) {
			const name = fn.getName();
			if (!name) continue;
			const info = resolveSqfFunctionInfo(
				file.getFilePath(),
				sourceRoot,
				name,
				tag,
			);
			registry.set(`${file.getFilePath()}::${name}`, info);
		}
	}

	return registry;
}
