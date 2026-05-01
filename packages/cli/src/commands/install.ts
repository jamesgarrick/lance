import { Command } from "@oclif/core";
import { mkdir, rm, unlink } from "node:fs/promises";
import { join } from "node:path";
import * as tar from "tar";
import { defaultRegistry, readLockfile, readManifest } from "../lib/manifest";

export default class Install extends Command {
	static override id = "install";
	static override aliases = ["i"];
	static override description = "Install dependencies from lance.lock";

	async run(): Promise<void> {
		const cwd = process.cwd();
		const lock = await readLockfile(process.cwd());
		if (!lock) this.error("No lance.lock found. Run `lance add` first.");
		const manifest = await readManifest(cwd);
		const registry = defaultRegistry(manifest);
		const modulesDir = join(cwd, "lance_modules");

		await mkdir(modulesDir, { recursive: true });

		for (const [pkgName, dep] of Object.entries(lock.dependencies)) {
			const [scope, name] = pkgName.split("/");
			if (!scope || !name) this.error(`Invalid dependency name in lockfile: ${pkgName}`);

			const targetDir = join(modulesDir, scope, name);
			const tempTarballPath = join(
				modulesDir,
				`.tmp-${scope.replaceAll("/", "_")}-${name}-${dep.version}.tgz`,
			);
			const url = `${registry}/packages/${encodeURIComponent(pkgName)}/versions/${encodeURIComponent(dep.version)}/tarball`;
			const res = await fetch(url);
			if (!res.ok) {
				const text = await res.text();
				const snippet = text.slice(0, 200).replace(/\s+/g, " ").trim();
				this.error(
					`Failed to download ${pkgName}@${dep.version} from ${url}: ${res.status} ${res.statusText} ${snippet}`,
				);
			}

			await Bun.write(tempTarballPath, new Uint8Array(await res.arrayBuffer()));
			await rm(targetDir, { recursive: true, force: true });
			await mkdir(targetDir, { recursive: true });
			await tar.x({ file: tempTarballPath, cwd: targetDir });
			await unlink(tempTarballPath).catch(() => undefined);
			this.log(`Installed ${pkgName}@${dep.version}`);
		}
		this.log(`Done. Installed ${Object.keys(lock.dependencies).length} package(s).`);
	}
}
