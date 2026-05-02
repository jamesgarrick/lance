import { Command } from "@oclif/core";
import { defaultRegistry, readManifest } from "../lib/manifest.js";
import { registryFetch } from "../lib/registry-client.js";

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
		await this.parse(Info);
		const name = this.argv[0];
		if (!name) this.error("Usage: lance info @scope/name");
		const manifest = await readManifest(process.cwd());
		const registry = defaultRegistry(manifest);
		const info = await registryFetch<PackageInfoResponse>(
			registry,
			`/package?name=${encodeURIComponent(name)}`,
		);
		this.log(JSON.stringify(info, null, 2));
	}
}
