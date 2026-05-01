import { Command } from "@oclif/core";
import { unlink } from "node:fs/promises";
import { getToken } from "../lib/auth";
import { defaultRegistry, readManifest } from "../lib/manifest";
import { registryFetch } from "../lib/registry-client";
import * as tar from "tar";

interface PublishResponse {
	ok: true;
	package: string;
	version: string;
}

export default class Publish extends Command {
	static override id = "publish";
	static override description = "Publish current package to registry";

	async run(): Promise<void> {
		const cwd = process.cwd();
		const token = await getToken();
		if (!token) this.error("Not logged in. Run `lance login` first.");

		const manifest = await readManifest(cwd);
		const registry = defaultRegistry(manifest);
		const packPath = `${cwd}/.lance-publish.tgz`;
		await tar.create({ gzip: true, cwd, file: packPath }, [
			"src",
			"lance.config.ts",
			"lance.config.toml",
			"tsconfig.json",
		]);

		const data = await Bun.file(packPath).arrayBuffer();
		const hash = new Bun.CryptoHasher("sha256");
		hash.update(new Uint8Array(data));
		const integrity = hash.digest("hex");
		const payload = Buffer.from(data).toString("base64");

		const res = await registryFetch<PublishResponse>(registry, "/publish", {
			method: "POST",
			token,
			body: JSON.stringify({
				name: manifest.name,
				version: manifest.version,
				dependencies: manifest.dependencies ?? {},
				integrity,
				tarballBase64Gzip: payload,
			}),
		});
		this.log(`Published ${res.package}@${res.version}`);
		await unlink(packPath).catch(() => undefined);
	}
}
