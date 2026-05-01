import { Command } from "@oclif/core";
import semver from "semver";
import { defaultRegistry, readManifest, writeLockfile } from "../lib/manifest";
import { installDependency } from "../lib/install-dependency";
import { registryFetch } from "../lib/registry-client";
import { writeGeneratedTsconfigPaths } from "../lib/tsconfig-paths";

interface PackageInfoResponse {
	name: string;
	versions: string[];
}

export default class Update extends Command {
	static override id = "update";
	static override description = "Update lockfile to latest compatible versions";

	async run(): Promise<void> {
		const cwd = process.cwd();
		const manifest = await readManifest(cwd);
		const deps = manifest.dependencies ?? {};
		const registry = defaultRegistry(manifest);
		const resolved: Record<string, { version: string }> = {};

		for (const [name, range] of Object.entries(deps)) {
			const info = await registryFetch<PackageInfoResponse>(
				registry,
				`/packages/${encodeURIComponent(name)}`,
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
