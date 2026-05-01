import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";
import type { CompilerOptions } from "../compiler/options";

export type CfgRootName = "cfgWeapons" | "cfgWeaponsItems" | "cfgMagazines";

export interface SemanticContext {
	readonly cfgRoots: Readonly<Record<CfgRootName, unknown>>;
}

export async function createSemanticContext(
	options: CompilerOptions,
): Promise<SemanticContext> {
	const typesPackageName = options.typesPackageName ?? "@lance/core";
	const explicitRoot = options.typesPackageRoot;
	const resolvedRoots = explicitRoot
		? [explicitRoot]
		: resolveDefaultCfgRoots(typesPackageName);

	const cfgRoots = {
		cfgWeapons: await readCfgJson(resolvedRoots, "cfgWeapons.json"),
		cfgWeaponsItems: await readCfgJson(resolvedRoots, "cfgWeaponsItems.json"),
		cfgMagazines: await readCfgJson(resolvedRoots, "cfgMagazines.json"),
	} satisfies Record<CfgRootName, unknown>;

	return {
		cfgRoots,
	};
}

export function resolveCfgReference(
	context: SemanticContext,
	rootName: CfgRootName,
	pathSegments: readonly string[],
): string | undefined {
	return resolveCfgPathValue(context.cfgRoots[rootName], pathSegments);
}

export function resolveCfgPathValue(
	root: unknown,
	pathSegments: readonly string[],
): string | undefined {
	let current: unknown = root;

	for (const segment of pathSegments) {
		if (!isRecord(current) || !(segment in current)) {
			return undefined;
		}

		current = current[segment];
	}

	if (typeof current === "string") {
		return current;
	}

	if (isRecord(current) && typeof current.base === "string") {
		return current.base;
	}

	return undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null;
}

async function readCfgJson(
	candidateRoots: readonly string[],
	fileName: string,
): Promise<unknown> {
	for (const root of candidateRoots) {
		const filePath = `${root}/${fileName}`;
		if (!existsSync(filePath)) continue;
		return JSON.parse(await Bun.file(filePath).text()) as unknown;
	}
	throw new Error(
		`Could not locate ${fileName}. Tried: ${candidateRoots.map((r) => `${r}/${fileName}`).join(", ")}`,
	);
}

function resolveDefaultCfgRoots(typesPackageName: string): string[] {
	const roots: string[] = [];

	try {
		const require = createRequire(import.meta.url);
		const pkgJson = require.resolve(`${typesPackageName}/package.json`);
		const pkgDir = dirname(pkgJson);
		roots.push(join(pkgDir, "data"));
		roots.push(pkgDir);
	} catch {
		// ignore; fall back to local development paths below
	}

	// Local dev fallbacks (monorepo checkouts)
	roots.push("../core/data");
	roots.push("../core");

	// de-dup while preserving order
	return [...new Set(roots)];
}
