import { join } from "node:path";
import { pathToFileURL } from "node:url";

export interface LanceManifest {
	name: string;
	version: string;
	type: "mission" | "library";
	registry?: string;
	exports?: string | string[];
	include?: string[];
	dependencies?: Record<string, string>;
}

export interface LockedPackage {
	version: string;
	integrity?: string;
	resolved?: string;
	dependencies?: Record<string, string>;
}

export interface LanceLockfile {
	lockfileVersion: 1;
	dependencies: Record<string, LockedPackage>;
}

export const MANIFEST_FILE = "lance.config.ts";
const LEGACY_MANIFEST_FILE = "lance.json";
export const LOCK_FILE = "lance.lock";

export async function readManifest(cwd: string): Promise<LanceManifest> {
	const tsPath = join(cwd, MANIFEST_FILE);
	const tsFile = Bun.file(tsPath);
	if (await tsFile.exists()) {
		const manifest = await importManifestFromTs(tsPath);
		return normalizeManifest(manifest, tsPath);
	}

	const legacyPath = join(cwd, LEGACY_MANIFEST_FILE);
	const legacyFile = Bun.file(legacyPath);
	if (await legacyFile.exists()) {
		const manifest = JSON.parse(await legacyFile.text()) as LanceManifest;
		return normalizeManifest(manifest, legacyPath);
	}

	throw new Error(
		`${MANIFEST_FILE} not found in ${cwd}. Run \`lance init\` to create one.`,
	);
}

export async function writeManifest(
	cwd: string,
	manifest: LanceManifest,
): Promise<void> {
	const path = join(cwd, MANIFEST_FILE);
	const normalized = normalizeManifest(manifest, path);
	await Bun.write(path, `${renderManifestTs(normalized)}\n`);
}

export async function readLockfile(cwd: string): Promise<LanceLockfile | null> {
	const path = join(cwd, LOCK_FILE);
	const file = Bun.file(path);
	if (!(await file.exists())) return null;
	return JSON.parse(await file.text()) as LanceLockfile;
}

export async function writeLockfile(
	cwd: string,
	lock: LanceLockfile,
): Promise<void> {
	const path = join(cwd, LOCK_FILE);
	await Bun.write(path, `${JSON.stringify(lock, null, 2)}\n`);
}

export function defaultRegistry(manifest: LanceManifest): string {
	return (
		manifest.registry ??
		process.env.LANCE_REGISTRY_URL ??
		"http://localhost:8787"
	);
}

export function ensurePackageName(name: string): void {
	if (!/^@[a-z0-9][a-z0-9-_]*\/[a-z0-9][a-z0-9-_]*$/i.test(name)) {
		throw new Error(`Invalid package name: ${name}. Expected @scope/name`);
	}
}

export function splitPackageAndVersion(raw: string): {
	name: string;
	version: string | null;
} {
	const match = raw.match(/^(@[^/]+\/[^@]+)(?:@(.+))?$/);
	if (!match)
		throw new Error(
			`Invalid package spec: ${raw}. Expected @scope/name or @scope/name@version`,
		);
	return { name: match[1]!, version: match[2] ?? null };
}

async function importManifestFromTs(path: string): Promise<unknown> {
	const moduleUrl = `${pathToFileURL(path).href}?t=${Date.now()}`;
	const mod = (await import(moduleUrl)) as { default?: unknown };
	if (mod.default === undefined) {
		throw new Error(
			`Invalid manifest at ${path}: expected \`export default { ... }\``,
		);
	}
	return mod.default;
}

function normalizeManifest(value: unknown, sourcePath: string): LanceManifest {
	if (!value || typeof value !== "object") {
		throw new Error(`Invalid manifest at ${sourcePath}: expected an object`);
	}
	const raw = value as Partial<LanceManifest>;
	if (typeof raw.name !== "string" || raw.name.length === 0) {
		throw new Error(`Invalid manifest at ${sourcePath}: "name" is required`);
	}
	if (typeof raw.version !== "string" || raw.version.length === 0) {
		throw new Error(`Invalid manifest at ${sourcePath}: "version" is required`);
	}
	if (raw.type !== "mission" && raw.type !== "library") {
		throw new Error(
			`Invalid manifest at ${sourcePath}: "type" must be "mission" or "library"`,
		);
	}
	const dependencies = raw.dependencies ?? {};
	if (typeof dependencies !== "object" || Array.isArray(dependencies)) {
		throw new Error(
			`Invalid manifest at ${sourcePath}: "dependencies" must be an object`,
		);
	}
	return {
		name: raw.name,
		version: raw.version,
		type: raw.type,
		registry: raw.registry,
		exports: normalizeExportsField(raw.exports, sourcePath),
		include: normalizeIncludeField(raw.include, sourcePath),
		dependencies: Object.fromEntries(
			Object.entries(dependencies).map(([k, v]) => [k, String(v)]),
		),
	};
}

function normalizeExportsField(
	value: unknown,
	sourcePath: string,
): string | string[] | undefined {
	if (value === undefined) return undefined;
	if (typeof value === "string") return value;
	if (Array.isArray(value) && value.every((x) => typeof x === "string")) {
		return value as string[];
	}
	throw new Error(
		`Invalid manifest at ${sourcePath}: "exports" must be a string or string[]`,
	);
}

function normalizeIncludeField(
	value: unknown,
	sourcePath: string,
): string[] | undefined {
	if (value === undefined) return undefined;
	if (Array.isArray(value) && value.every((x) => typeof x === "string")) {
		return value as string[];
	}
	throw new Error(
		`Invalid manifest at ${sourcePath}: "include" must be a string[]`,
	);
}

function renderManifestTs(manifest: LanceManifest): string {
	const dependencies = manifest.dependencies ?? {};
	const dependenciesLines = Object.entries(dependencies)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([name, range]) => `    ${JSON.stringify(name)}: ${JSON.stringify(range)},`);

	return [
		"export default {",
		`  name: ${JSON.stringify(manifest.name)},`,
		`  version: ${JSON.stringify(manifest.version)},`,
		`  type: ${JSON.stringify(manifest.type)},`,
		...(manifest.registry ? [`  registry: ${JSON.stringify(manifest.registry)},`] : []),
		...(manifest.exports
			? [`  exports: ${JSON.stringify(manifest.exports)},`]
			: []),
		...(manifest.include
			? [`  include: ${JSON.stringify(manifest.include)},`]
			: []),
		"  dependencies: {",
		...dependenciesLines,
		"  },",
		"} satisfies {",
		"  name: string;",
		'  version: string;',
		'  type: "mission" | "library";',
		"  registry?: string;",
		"  exports?: string | string[];",
		"  include?: string[];",
		"  dependencies?: Record<string, string>;",
		"};",
	].join("\n");
}
