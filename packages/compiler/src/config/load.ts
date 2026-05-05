import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { LanceConfig } from "./schema";

export const CONFIG_FILENAME = "lance.config.ts";
export const PACKAGE_FILENAME = "lance.package.json";

export async function loadLanceConfig(
	projectRoot: string,
): Promise<LanceConfig> {
	const packagePath = join(projectRoot, PACKAGE_FILENAME);
	const packageFile = Bun.file(packagePath);
	if (!(await packageFile.exists())) {
		throw new Error(
			`Lance package metadata not found at ${packagePath}. Run 'lance init' to create one.`,
		);
	}
	const packageManifest = normalizePackageManifest(
		JSON.parse(await packageFile.text()) as unknown,
		packagePath,
	);

	const configPath = join(projectRoot, CONFIG_FILENAME);
	const file = Bun.file(configPath);
	const config = (await file.exists())
		? normalizeConfigObject(await importConfig(configPath), configPath)
		: {};
	const build = normalizeBuildConfig(config.build, configPath);
	const entrypoint = build.entrypoint ?? resolveEntrypoint(packageManifest);

	return {
		project: {
			name: packageManifest.name,
			type: packageManifest.type,
			version:
				typeof packageManifest.version === "string"
					? packageManifest.version
					: undefined,
		},
		mission: normalizeMissionConfig(config.mission),
		build: {
			entrypoint,
			tag: build.tag,
			outDir: build.outDir,
			tsConfig: build.tsConfig,
			typesPackage: build.typesPackage,
			typesPackageRoot: build.typesPackageRoot,
			sourceRoot: build.sourceRoot,
		},
	};
}

async function importConfig(path: string): Promise<unknown> {
	const moduleUrl = `${pathToFileURL(path).href}?t=${Date.now()}`;
	const mod = (await import(moduleUrl)) as { default?: unknown };
	if (mod.default === undefined) {
		throw new Error(
			`Invalid config at ${path}: expected \`export default { ... }\``,
		);
	}
	return mod.default;
}

function resolveEntrypoint(manifest: LancePackageManifest): string {
	const exportsField = manifest.exports;
	if (exportsField === undefined) {
		return manifest.type === "mission" ? "./src/init.ts" : "./src/index.ts";
	}
	if (typeof exportsField === "string") return exportsField;
	if (Array.isArray(exportsField)) {
		const first = exportsField.find((v): v is string => typeof v === "string");
		if (!first) throw new Error(`Invalid package metadata: empty "exports" array`);
		return first;
	}
	throw new Error(`Invalid package metadata: "exports" must be a string or string[]`);
}

interface LancePackageManifest {
	name: string;
	version: string;
	type: "mission" | "library";
	exports?: string | string[];
}

function normalizePackageManifest(
	value: unknown,
	sourcePath: string,
): LancePackageManifest {
	if (!value || typeof value !== "object") {
		throw new Error(`Invalid package metadata at ${sourcePath}: expected an object`);
	}
	const raw = value as Record<string, unknown>;
	if (typeof raw.name !== "string" || raw.name.length === 0) {
		throw new Error(`Invalid package metadata at ${sourcePath}: "name" is required`);
	}
	if (typeof raw.version !== "string" || raw.version.length === 0) {
		throw new Error(
			`Invalid package metadata at ${sourcePath}: "version" is required`,
		);
	}
	if (raw.type !== "mission" && raw.type !== "library") {
		throw new Error(
			`Invalid package metadata at ${sourcePath}: "type" must be "mission" or "library"`,
		);
	}
	if (
		raw.exports !== undefined &&
		typeof raw.exports !== "string" &&
		(!Array.isArray(raw.exports) ||
			!raw.exports.every((entry) => typeof entry === "string"))
	) {
		throw new Error(
			`Invalid package metadata at ${sourcePath}: "exports" must be a string or string[]`,
		);
	}
	return {
		name: raw.name,
		version: raw.version,
		type: raw.type,
		exports: raw.exports as string | string[] | undefined,
	};
}

function normalizeConfigObject(
	value: unknown,
	sourcePath: string,
): Record<string, unknown> {
	if (!value || typeof value !== "object") {
		throw new Error(`Invalid config at ${sourcePath}: expected an object`);
	}
	return value as Record<string, unknown>;
}

function normalizeBuildConfig(
	value: unknown,
	sourcePath: string,
): Record<string, string | undefined> {
	if (value === undefined) return {};
	if (!value || typeof value !== "object" || Array.isArray(value)) {
		throw new Error(`Invalid config at ${sourcePath}: "build" must be an object`);
	}
	const build = value as Record<string, unknown>;
	for (const key of [
		"entrypoint",
		"tag",
		"outDir",
		"tsConfig",
		"typesPackage",
		"typesPackageRoot",
		"sourceRoot",
	]) {
		const entry = build[key];
		if (entry !== undefined && typeof entry !== "string") {
			throw new Error(`Invalid config at ${sourcePath}: "build.${key}" must be a string`);
		}
	}
	return build as Record<string, string | undefined>;
}

function normalizeMissionConfig(
	value: unknown,
): LanceConfig["mission"] | undefined {
	if (value === undefined) return undefined;
	if (!value || typeof value !== "object" || Array.isArray(value)) {
		throw new Error(`Invalid config: "mission" must be an object`);
	}
	return value as LanceConfig["mission"];
}
