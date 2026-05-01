import { Command } from "@oclif/core";
import {
	readLockfile,
	readManifest,
	writeLockfile,
	writeManifest,
} from "../lib/manifest";

export default class Remove extends Command {
	static override id = "remove";
	static override description = "Remove a dependency from lance.json";

	async run(): Promise<void> {
		const name = this.argv[0];
		if (!name) this.error("Usage: lance remove @scope/name");
		const cwd = process.cwd();
		const manifest = await readManifest(cwd);
		if (!manifest.dependencies?.[name])
			this.error(`${name} is not a dependency`);
		delete manifest.dependencies[name];
		await writeManifest(cwd, manifest);

		const lock = await readLockfile(cwd);
		if (lock?.dependencies[name]) {
			delete lock.dependencies[name];
			await writeLockfile(cwd, lock);
		}
		this.log(`Removed ${name}`);
	}
}
