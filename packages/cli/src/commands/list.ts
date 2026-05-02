import { Command } from "@oclif/core";
import { readLockfile } from "../lib/manifest.js";

export default class List extends Command {
	static override id = "list";
	static override description = "Print resolved dependency tree";

	async run(): Promise<void> {
		const lock = await readLockfile(process.cwd());
		if (!lock) this.error("No lance.lock found.");
		for (const [name, dep] of Object.entries(lock.dependencies)) {
			this.log(`${name}@${dep.version}`);
		}
	}
}
