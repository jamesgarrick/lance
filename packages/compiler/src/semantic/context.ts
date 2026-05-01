import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
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
		cfgWeapons: await readCfgJson(resolvedRoots, [
			"cfgWeapons/cfgWeapons_Weapons.json",
			"cfgWeapons.json",
		]),
		cfgWeaponsItems: await readCfgJson(resolvedRoots, [
			"cfgWeapons/cfgWeapons_Items.json",
			"cfgWeaponsItems.json",
		]),
		cfgMagazines: await readCfgJson(resolvedRoots, ["cfgMagazines.json"]),
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
	fileNames: readonly string[],
): Promise<unknown> {
	for (const root of candidateRoots) {
		for (const fileName of fileNames) {
			const filePath = `${root}/${fileName}`;
			if (!existsSync(filePath)) continue;
			return JSON.parse(await Bun.file(filePath).text()) as unknown;
		}
	}
	throw new Error(
		`Could not locate any of [${fileNames.join(", ")}]. Tried: ${candidateRoots.flatMap((r) => fileNames.map((f) => `${r}/${f}`)).join(", ")}`,
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

	const contextDir = dirname(fileURLToPath(import.meta.url));
	const monorepoRoot = join(contextDir, "..", "..", "..", "..");

	// Local dev fallbacks (monorepo checkouts)
	roots.push(join(monorepoRoot, "packages", "core", "data"));
	roots.push(join(monorepoRoot, "packages", "core"));
	roots.push("../core/data");
	roots.push("../core");

	// de-dup while preserving order
	return [...new Set(roots)];
}
