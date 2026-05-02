import { Command } from "@oclif/core";
import semver from "semver";
import { defaultRegistry, readManifest, writeLockfile } from "../lib/manifest.js";
import { installDependency } from "../lib/install-dependency.js";
import { registryFetch } from "../lib/registry-client.js";
import { writeGeneratedTsconfigPaths } from "../lib/tsconfig-paths.js";

interface PackageInfoResponse {
	name: string;
	versions: string[];
}

export default class Update extends Command {
	static override id = "update";
	static override description = "Update lockfile to latest compatible versions";

	async run(): Promise<void> {
		await this.parse(Update);
		const cwd = process.cwd();
		const manifest = await readManifest(cwd);
		const deps = manifest.dependencies ?? {};
		const registry = defaultRegistry(manifest);
		const resolved: Record<string, { version: string }> = {};

		for (const [name, range] of Object.entries(deps)) {
			const info = await registryFetch<PackageInfoResponse>(
				registry,
				`/package?name=${encodeURIComponent(name)}`,
			);
			const v = semver.maxSatisfying(info.versions, range);
			if (!v) this.error(`Could not resolve ${name} with range ${range}`);
			resolved[name] = { version: v };
			this.log(`${name}@${v}`);
		}

		await writeLockfile(cwd, { lockfileVersion: 1, dependencies: resolved });
		await writeGeneratedTsconfigPaths(cwd, resolved);

		for (const [name, dep] of Object.entries(resolved)) {
			await installDependency(cwd, registry, name, dep.version);
			this.log(`Installed ${name}@${dep.version}`);
		}
	}
}
