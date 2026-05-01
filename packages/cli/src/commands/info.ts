import { Command } from "@oclif/core";
import { defaultRegistry, readManifest } from "../lib/manifest";
import { registryFetch } from "../lib/registry-client";

interface PackageInfoResponse {
	name: string;
	versions: string[];
	dependencies?: Record<string, string>;
	publishedAt?: string;
}

export default class Info extends Command {
	static override id = "info";
	static override description = "Show package metadata";

	async run(): Promise<void> {
		const name = this.argv[0];
		if (!name) this.error("Usage: lance info @scope/name");
		const manifest = await readManifest(process.cwd());
		const registry = defaultRegistry(manifest);
		const info = await registryFetch<PackageInfoResponse>(
			registry,
			`/packages/${encodeURIComponent(name)}`,
		);
		this.log(JSON.stringify(info, null, 2));
	}
}
