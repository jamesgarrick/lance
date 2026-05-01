import { Command } from "@oclif/core";
import { getToken } from "../lib/auth";
import { defaultRegistry, readManifest } from "../lib/manifest";
import { registryFetch } from "../lib/registry-client";

interface WhoAmIResponse {
	user: string;
}

export default class WhoAmI extends Command {
	static override id = "whoami";
	static override description = "Show authenticated user";

	async run(): Promise<void> {
		const token = await getToken();
		if (!token) this.error("Not logged in.");
		const manifest = await readManifest(process.cwd()).catch(() => ({
			name: "",
			version: "",
			type: "library" as const,
		}));
		const registry = defaultRegistry(manifest);
		const me = await registryFetch<WhoAmIResponse>(registry, "/auth/whoami", {
			token,
		});
		this.log(me.user);
	}
}
