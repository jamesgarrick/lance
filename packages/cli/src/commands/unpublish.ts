import { Command } from "@oclif/core";
import { getToken } from "../lib/auth.js";
import {
	defaultRegistry,
	readManifest,
	splitPackageAndVersion,
} from "../lib/manifest.js";
import { registryFetch } from "../lib/registry-client.js";

export default class Unpublish extends Command {
	static override id = "unpublish";
	static override description = "Unpublish one package version (72h window)";

	async run(): Promise<void> {
		const spec = this.argv[0];
		if (!spec) this.error("Usage: lance unpublish @scope/name@version");
		const token = await getToken();
		if (!token) this.error("Not logged in.");
		const { name, version } = splitPackageAndVersion(spec);
		if (!version) this.error("Use @scope/name@version");
		const manifest = await readManifest(process.cwd()).catch(() => ({
			name: "",
			version: "",
			type: "library" as const,
		}));
		const registry = defaultRegistry(manifest);
		await registryFetch(
			registry,
			`/packages/${encodeURIComponent(name)}/versions/${encodeURIComponent(version)}`,
			{
				method: "DELETE",
				token,
			},
		);
		this.log(`Unpublished ${name}@${version}`);
	}
}
