import { Command } from "@oclif/core";
import { dirname, extname, join, resolve } from "node:path";
import { unlink } from "node:fs/promises";
import { getToken } from "../lib/auth.js";
import { defaultRegistry, readManifest } from "../lib/manifest.js";
import { registryFetch } from "../lib/registry-client.js";
import * as tar from "tar";

interface PublishResponse {
	ok: true;
	package: string;
	version: string;
}

export default class Publish extends Command {
	static override id = "publish";
	static override description = "Publish current package to registry";

	async run(): Promise<void> {
		try {
			await this.parse(Publish);
			const cwd = process.cwd();
			const token = await getToken();
			if (!token) this.error("Not logged in. Run `lance login` first.");

			const manifest = await readManifest(cwd);
			if (manifest.private === true) {
				this.error(
					"Refusing to publish: lance.package.json sets private: true.",
				);
			}
			const registry = defaultRegistry(manifest);
			const packPath = `${cwd}/.lance-publish.tgz`;
			const fileList = await collectPublishFiles(cwd, manifest);
			await tar.create({ gzip: true, cwd, file: packPath }, fileList);

			const data = await Bun.file(packPath).arrayBuffer();
			const hash = new Bun.CryptoHasher("sha256");
			hash.update(new Uint8Array(data));
			const integrity = hash.digest("hex");
			// NOTE: prior to this change, some versions were double-gzipped and produced bad archives.
			// Those historical versions remain invalid and should be superseded by a republish.
			const payload = Buffer.from(data).toString("base64");

			const res = await registryFetch<PublishResponse>(registry, "/publish", {
				method: "POST",
				token,
				body: JSON.stringify({
					name: manifest.name,
					version: manifest.version,
					dependencies: manifest.dependencies ?? {},
					integrity,
					tarballBase64Gzip: payload,
				}),
			});
			this.log(`Published ${res.package}@${res.version}`);
			await unlink(packPath).catch(() => undefined);
		} catch (error: unknown) {
			const message =
				error instanceof Error ? error.message : "Failed to publish package";
			this.logToStderr(`Error: ${message}`);
			this.exit(1);
		}
	}
}

async function collectPublishFiles(
	cwd: string,
	manifest: Awaited<ReturnType<typeof readManifest>>,
): Promise<string[]> {
	const exportsField = manifest.exports ?? "./src/index.ts";
	const entrypoints = Array.isArray(exportsField) ? exportsField : [exportsField];
	const traced = new Set<string>();
	const queue: string[] = [];

	for (const entry of entrypoints) {
		const resolved = await resolveModulePath(cwd, entry);
		if (!resolved) throw new Error(`Could not resolve export entrypoint: ${entry}`);
		queue.push(resolved);
	}

	while (queue.length > 0) {
		const file = queue.pop()!;
		if (traced.has(file)) continue;
		traced.add(file);

		const source = await Bun.file(file).text();
		for (const spec of parseImportSpecifiers(source)) {
			if (!spec.startsWith(".")) continue;
			const resolved = await resolveModulePath(dirname(file), spec);
			if (resolved && !traced.has(resolved)) queue.push(resolved);
		}
	}

	const included = new Set<string>();
	for (const pattern of manifest.include ?? []) {
		const glob = new Bun.Glob(pattern);
		for await (const rel of glob.scan({ cwd })) {
			const path = normalizeRel(rel);
			if (path.startsWith("node_modules/") || path.startsWith("lance_modules/")) continue;
			included.add(path);
		}
	}

	const files = new Set<string>();
	for (const absPath of traced) files.add(normalizeRel(absPath.slice(cwd.length + 1)));
	for (const rel of included) files.add(rel);

	files.add("lance.package.json");
	if (await Bun.file(join(cwd, "lance.config.ts")).exists()) {
		files.add("lance.config.ts");
	}
	if (await Bun.file(join(cwd, "tsconfig.json")).exists()) files.add("tsconfig.json");

	return [...files].sort();
}

function parseImportSpecifiers(source: string): string[] {
	const specs = new Set<string>();
	const patterns = [
		/import\s+(?:[^"'`]+?\s+from\s+)?["'`]([^"'`]+)["'`]/g,
		/export\s+[^"'`]*?\s+from\s+["'`]([^"'`]+)["'`]/g,
		/import\(\s*["'`]([^"'`]+)["'`]\s*\)/g,
		/require\(\s*["'`]([^"'`]+)["'`]\s*\)/g,
	];
	for (const pattern of patterns) {
		for (const match of source.matchAll(pattern)) {
			const spec = match[1];
			if (spec) specs.add(spec);
		}
	}
	return [...specs];
}

async function resolveModulePath(baseDir: string, spec: string): Promise<string | null> {
	const start = spec.startsWith("/") ? spec : resolve(baseDir, spec);
	const candidates: string[] = [];
	const ext = extname(start);
	if (ext) {
		candidates.push(start);
	} else {
		candidates.push(
			start,
			`${start}.d.ts`,
			`${start}.ts`,
			`${start}.tsx`,
			`${start}.js`,
			`${start}.jsx`,
			`${start}.mjs`,
			`${start}.mts`,
			join(start, "index.d.ts"),
			join(start, "index.ts"),
			join(start, "index.tsx"),
			join(start, "index.js"),
			join(start, "index.mjs"),
		);
	}

	for (const candidate of candidates) {
		if (await Bun.file(candidate).exists()) return candidate;
	}
	return null;
}

function normalizeRel(path: string): string {
	return path.replaceAll("\\", "/").replace(/^\.\/+/, "");
}
