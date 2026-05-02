import { Command } from "@oclif/core";
import { defaultRegistry, readLockfile, readManifest } from "../lib/manifest.js";
import { installDependency } from "../lib/install-dependency.js";
import { writeGeneratedTsconfigPaths } from "../lib/tsconfig-paths.js";

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
		await writeGeneratedTsconfigPaths(cwd, lock.dependencies);

		for (const [pkgName, dep] of Object.entries(lock.dependencies)) {
			await installDependency(cwd, registry, pkgName, dep.version);
			this.log(`Installed ${pkgName}@${dep.version}`);
		}
		this.log(`Done. Installed ${Object.keys(lock.dependencies).length} package(s).`);
	}
}
