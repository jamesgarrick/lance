import { join } from "node:path";

export interface LanceManifest {
	name: string;
	version: string;
	type: "mission" | "library";
	registry?: string;
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

export const MANIFEST_FILE = "lance.json";
export const LOCK_FILE = "lance.lock";

export async function readManifest(cwd: string): Promise<LanceManifest> {
	const path = join(cwd, MANIFEST_FILE);
	const file = Bun.file(path);
	if (!(await file.exists()))
		throw new Error(`${MANIFEST_FILE} not found in ${cwd}`);
	return JSON.parse(await file.text()) as LanceManifest;
}

export async function writeManifest(
	cwd: string,
	manifest: LanceManifest,
): Promise<void> {
	const path = join(cwd, MANIFEST_FILE);
	await Bun.write(path, `${JSON.stringify(manifest, null, 2)}\n`);
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
