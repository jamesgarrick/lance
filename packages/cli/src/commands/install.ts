import { Command } from "@oclif/core";
import { readLockfile } from "../lib/manifest";

export default class Install extends Command {
	static override id = "install";
	static override aliases = ["i"];
	static override description = "Install dependencies from lance.lock";

	async run(): Promise<void> {
		const lock = await readLockfile(process.cwd());
		if (!lock) this.error("No lance.lock found. Run `lance add` first.");
		for (const [name, dep] of Object.entries(lock.dependencies)) {
			this.log(`${name}@${dep.version}`);
		}
		this.log(
			`Installed ${Object.keys(lock.dependencies).length} packages (lockfile-only v1).`,
		);
	}
}
