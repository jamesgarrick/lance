import { input } from "@inquirer/prompts";
import { Command } from "@oclif/core";
import { readRc, writeRc } from "../lib/auth";

export default class Login extends Command {
	static override id = "login";
	static override description = "Store auth token in ~/.lancerc";

	async run(): Promise<void> {
		const token = await input({ message: "Paste registry JWT token" });
		if (!token) this.error("No token provided");
		const rc = await readRc();
		rc.token = token;
		await writeRc(rc);
		this.log("Login successful.");
	}
}
