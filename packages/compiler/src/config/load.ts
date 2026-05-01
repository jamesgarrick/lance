import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { LanceConfig } from "./schema";

export const CONFIG_FILENAME = "lance.config.ts";

export async function loadLanceConfig(
	projectRoot: string,
): Promise<LanceConfig> {
	const configPath = join(projectRoot, CONFIG_FILENAME);
	const file = Bun.file(configPath);

	if (!(await file.exists())) {
		throw new Error(
			`Lance config not found at ${configPath}. Run 'lance init' to create one.`,
		);
	}

	const raw = await importConfig(configPath);
	if (!raw || typeof raw !== "object") {
		throw new Error(`Invalid config at ${configPath}: expected an object`);
	}

	const manifest = raw as Record<string, unknown>;
	if (typeof manifest.name !== "string" || manifest.name.length === 0) {
		throw new Error(
			`Invalid config at ${configPath}: "name" is required`,
		);
	}
	if (manifest.type !== "mission" && manifest.type !== "library") {
		throw new Error(
			`Invalid config at ${configPath}: "type" must be "mission" or "library"`,
		);
	}

	const entrypoint = resolveEntrypoint(manifest, configPath);
	if (!entrypoint) {
		throw new Error(
			`Invalid config at ${configPath}: unable to determine build entrypoint from "exports"`,
		);
	}

	return {
		project: {
			name: manifest.name,
			type: manifest.type,
			version:
				typeof manifest.version === "string" ? manifest.version : undefined,
		},
		build: {
			entrypoint,
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

function resolveEntrypoint(
	manifest: Record<string, unknown>,
	configPath: string,
): string | null {
	const exportsField = manifest.exports;
	if (exportsField === undefined) {
		return manifest.type === "mission" ? "./src/init.ts" : "./src/index.ts";
	}
	if (typeof exportsField === "string") return exportsField;
	if (Array.isArray(exportsField)) {
		const first = exportsField.find((v): v is string => typeof v === "string");
		if (!first) {
			throw new Error(
				`Invalid config at ${configPath}: "exports" must contain at least one string entry`,
			);
		}
		return first;
	}
	throw new Error(
		`Invalid config at ${configPath}: "exports" must be a string or string[]`,
	);
}
