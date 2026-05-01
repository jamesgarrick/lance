import { input } from "@inquirer/prompts";
import { Command, Flags } from "@oclif/core";
import { readRc, writeRc } from "../lib/auth";
import { defaultRegistry } from "../lib/manifest";

function openBrowser(url: string): void {
	if (process.platform === "darwin") {
		Bun.spawn(["open", url], { stdout: "ignore", stderr: "ignore" });
		return;
	}
	if (process.platform === "win32") {
		Bun.spawn(["cmd", "/c", "start", "", url], {
			stdout: "ignore",
			stderr: "ignore",
		});
		return;
	}
	Bun.spawn(["xdg-open", url], { stdout: "ignore", stderr: "ignore" });
}

function getWebBaseUrl(webUrl?: string): string {
	return webUrl ?? process.env.LANCE_WEB_URL ?? "https://lance.jamesgarrick.com";
}

async function waitForOAuthToken(port: number): Promise<{
	token: string;
}> {
	return new Promise((resolve, reject) => {
		let settled = false;
		const timeout = setTimeout(() => {
			if (settled) return;
			settled = true;
			server.stop(true);
			reject(new Error("Timed out waiting for OAuth callback"));
		}, 3 * 60 * 1000);

		const server = Bun.serve({
			hostname: "127.0.0.1",
			port,
			fetch(req) {
				const url = new URL(req.url);
				const token = url.searchParams.get("token") ?? "";
				const error = url.searchParams.get("error") ?? "";

				if (error) {
					if (!settled) {
						settled = true;
						clearTimeout(timeout);
						server.stop(true);
						reject(new Error(`OAuth error: ${error}`));
					}
					return new Response("OAuth failed. You can close this window.", {
						status: 400,
					});
				}

				if (!token) {
					return new Response("Missing token", { status: 400 });
				}

				if (!settled) {
					settled = true;
					clearTimeout(timeout);
					server.stop(true);
					resolve({
						token,
					});
				}
				return new Response("Login successful. You can close this window.");
			},
		});
	});
}

export default class Login extends Command {
	static override id = "login";
	static override description = "Login via browser OAuth and store token in ~/.lancerc";
	static override flags = {
		manual: Flags.boolean({
			description: "Paste registry JWT token manually",
			default: false,
		}),
		webUrl: Flags.string({
			description: "Web app base URL for OAuth flow",
		}),
		registry: Flags.string({
			description: "Registry base URL override for this login flow",
		}),
		callbackPort: Flags.integer({
			description: "Local callback port for OAuth flow",
			default: 53682,
		}),
	};

	async run(): Promise<void> {
		const { flags } = await this.parse(Login);
		let token: string;
		const rc = await readRc();
		const registry = flags.registry ?? process.env.LANCE_REGISTRY_URL;

		if (flags.manual) {
			token = await input({ message: "Paste registry JWT token" });
			if (!token) this.error("No token provided");
		} else {
			const resolvedRegistry = registry ?? defaultRegistry();
			const webBase = getWebBaseUrl(flags.webUrl);
			const callbackUrl = `http://127.0.0.1:${flags.callbackPort}/callback`;
			const authStartUrl = new URL(`${webBase}/auth/start`);
			authStartUrl.searchParams.set("return_to", callbackUrl);
			authStartUrl.searchParams.set("registry", resolvedRegistry);

			this.log(`Opening browser for OAuth: ${authStartUrl.toString()}`);
			openBrowser(authStartUrl.toString());
			const oauthResult = await waitForOAuthToken(flags.callbackPort);
			token = oauthResult.token;
		}

		rc.token = token;
		await writeRc(rc);
		this.log("Login successful.");
	}
}
