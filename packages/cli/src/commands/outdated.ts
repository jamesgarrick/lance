import { Command } from "@oclif/core";
import semver from "semver";
import { defaultRegistry, readManifest } from "../lib/manifest";
import { registryFetch } from "../lib/registry-client";

interface PackageInfoResponse {
	name: string;
	versions: string[];
}

export default class Outdated extends Command {
	static override id = "outdated";
	static override description = "List deps with newer compatible versions";

	async run(): Promise<void> {
		const manifest = await readManifest(process.cwd());
		const deps = manifest.dependencies ?? {};
		const registry = defaultRegistry(manifest);
		for (const [name, range] of Object.entries(deps)) {
			const info = await registryFetch<PackageInfoResponse>(
				registry,
				`/packages/${encodeURIComponent(name)}`,
			);
			const current = info.versions
				.filter((v) => semver.satisfies(v, range))
				.at(-1);
			const latest = info.versions.at(-1);
			if (latest && current && latest !== current) {
				this.log(`${name}: ${current} -> ${latest} (range ${range})`);
			}
		}
	}
}
