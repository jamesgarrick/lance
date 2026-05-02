import { Command } from "@oclif/core";
import { getToken } from "../lib/auth.js";
import { defaultRegistry } from "../lib/manifest.js";
import { registryFetch } from "../lib/registry-client.js";

interface WhoAmIResponse {
	user: string;
}

export default class WhoAmI extends Command {
	static override id = "whoami";
	static override description = "Show authenticated user";

	async run(): Promise<void> {
		const token = await getToken();
		if (!token) this.error("Not logged in.");
		const registry = defaultRegistry();
		const me = await registryFetch<WhoAmIResponse>(registry, "/auth/whoami", {
			token,
		});
		this.log(me.user);
	}
}
