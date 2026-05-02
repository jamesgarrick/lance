import { Node, type ImportDeclaration, type SourceFile } from "ts-morph";
import type { FunctionRegistry } from "../compiler/project";

export interface ClassFunctionBinding {
	readonly sqfName: string;
}

export interface SourceFileSemanticBindings {
	readonly importedLocalNames: Readonly<Record<string, string | undefined>>;
	readonly sleepLocalName: string | undefined;
	readonly importedProjectFunctions: ReadonlyMap<string, string>;
	readonly sqfCommandFunctions: ReadonlyMap<string, string>;
	readonly sqfCommandLocalArgumentIndexes: ReadonlyMap<string, readonly number[]>;
	readonly typesPackageName: string;
	readonly classConstructors: ReadonlyMap<string, ClassFunctionBinding>;
	readonly classInstanceMethods: ReadonlyMap<string, ClassFunctionBinding>;
	readonly classStaticMethods: ReadonlyMap<string, ClassFunctionBinding>;
}

export function collectSemanticBindings(
	sourceFile: SourceFile,
	functionRegistry: FunctionRegistry,
	typesPackageName: string,
): Omit<
	SourceFileSemanticBindings,
	"classConstructors" | "classInstanceMethods" | "classStaticMethods"
> {
	const lanceImport = sourceFile
		.getImportDeclarations()
		.find((d) => d.getModuleSpecifierValue() === typesPackageName);

	const importedLocalNames = {
		player: getNamedImportLocalName(lanceImport, "player"),
		cfgWeapons: getNamedImportLocalName(lanceImport, "cfgWeapons"),
		cfgWeaponsItems: getNamedImportLocalName(lanceImport, "cfgWeaponsItems"),
		cfgMagazines: getNamedImportLocalName(lanceImport, "cfgMagazines"),
		isServer: getNamedImportLocalName(lanceImport, "isServer"),
	};

	const sleepLocalName = getNamedImportLocalName(lanceImport, "sleep");

	const importedProjectFunctions = new Map<string, string>();
	for (const decl of sourceFile.getImportDeclarations()) {
		if (!decl.getModuleSpecifierValue().startsWith(".")) continue;
		const resolvedFile = decl.getModuleSpecifierSourceFile();
		if (!resolvedFile) continue;
		for (const named of decl.getNamedImports()) {
			const exportedName = named.getName();
			const localName = named.getAliasNode()?.getText() ?? named.getName();
			const info = functionRegistry.get(
				`${resolvedFile.getFilePath()}::${exportedName}`,
			);
			if (info) importedProjectFunctions.set(localName, info.sqfName);
		}
	}

	const sqfCommandFunctions = new Map<string, string>();
	const sqfCommandLocalArgumentIndexes = new Map<string, readonly number[]>();
	const skipExportedNames = new Set<string>([
		"player",
		"cfgWeapons",
		"cfgWeaponsItems",
		"cfgMagazines",
		"sleep",
		"isServer",
	]);
	if (lanceImport) {
		for (const named of lanceImport.getNamedImports()) {
			if (lanceImport.isTypeOnly() || named.isTypeOnly()) continue;
			const exportedName = named.getName();
			if (skipExportedNames.has(exportedName)) continue;
			const localName = named.getAliasNode()?.getText() ?? exportedName;
			sqfCommandFunctions.set(localName, exportedName);

			const localArgumentIndexes = getLocalArgumentParameterIndexes(named);
			if (localArgumentIndexes.length > 0) {
				sqfCommandLocalArgumentIndexes.set(exportedName, localArgumentIndexes);
			}
		}
	}

	return {
		importedLocalNames,
		sleepLocalName,
		importedProjectFunctions,
		sqfCommandFunctions,
		sqfCommandLocalArgumentIndexes,
		typesPackageName,
	};
}

function getNamedImportLocalName(
	decl: ImportDeclaration | undefined,
	exportedName: string,
): string | undefined {
	const named = decl
		?.getNamedImports()
		.find((e) => e.getName() === exportedName);
	return named?.getAliasNode()?.getText() ?? named?.getName();
}

function getLocalArgumentParameterIndexes(
	namedImport: import("ts-morph").ImportSpecifier,
): readonly number[] {
	const symbol = namedImport.getNameNode().getSymbol();
	const declarations = symbol?.getAliasedSymbol()?.getDeclarations() ?? [];
	const indexes = new Set<number>();

	for (const declaration of declarations) {
		if (!Node.isFunctionDeclaration(declaration)) continue;

		declaration.getParameters().forEach((parameter, index) => {
			const typeText = parameter.getTypeNode()?.getText() ?? "";
			if (/\bLocalArgument\s*</.test(typeText)) {
				indexes.add(index);
			}
		});
	}

	return [...indexes].sort((left, right) => left - right);
}
