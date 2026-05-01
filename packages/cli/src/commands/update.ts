import { Command } from "@oclif/core";
import semver from "semver";
import { defaultRegistry, readManifest, writeLockfile } from "../lib/manifest";
import { registryFetch } from "../lib/registry-client";

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
	}
}
