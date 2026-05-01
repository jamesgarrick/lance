import { Command, Flags } from "@oclif/core";
import semver from "semver";
import {
	defaultRegistry,
	ensurePackageName,
	readManifest,
	splitPackageAndVersion,
	writeLockfile,
	writeManifest,
} from "../lib/manifest";
import { registryFetch } from "../lib/registry-client";

interface PackageInfoResponse {
	name: string;
	versions: string[];
}

export default class Add extends Command {
	static override id = "add";
	static override description = "Add a dependency to lance.json";
	static override flags = {
		exact: Flags.boolean({
			description: "Pin exact version instead of ^range",
			default: false,
		}),
	};

	async run(): Promise<void> {
		const { flags } = await this.parse(Add);
		const spec = this.argv[0];
		if (!spec) this.error("Usage: lance add @scope/name[@version|@range]");
		const cwd = process.cwd();
		const manifest = await readManifest(cwd);
		const { name, version } = splitPackageAndVersion(spec);
		ensurePackageName(name);

		const registry = defaultRegistry(manifest);
		const info = await registryFetch<PackageInfoResponse>(
			registry,
			`/packages/${encodeURIComponent(name)}`,
		);
		const resolved = version ?? info.versions.at(-1);
		if (!resolved) this.error(`No versions found for ${name}`);

		if (version && !semver.valid(version) && !semver.validRange(version)) {
			this.error(`Invalid version/range: ${version}`);
		}
		if (version && semver.valid(version) && !info.versions.includes(version)) {
			this.error(`Version ${version} not found for ${name}`);
		}

		const depRange = version
			? semver.valid(version)
				? flags.exact
					? version
					: `^${version}`
				: version
			: flags.exact
				? resolved
				: `^${resolved}`;

		manifest.dependencies = manifest.dependencies ?? {};
		manifest.dependencies[name] = depRange;
		await writeManifest(cwd, manifest);

		const lockDeps: Record<string, { version: string }> = {};
		for (const [pkg, range] of Object.entries(manifest.dependencies)) {
			const pkgInfo =
				pkg === name
					? info
					: await registryFetch<PackageInfoResponse>(
							registry,
							`/packages/${encodeURIComponent(pkg)}`,
						);
			const v = pkgInfo.versions
				.filter((x) => semver.satisfies(x, range))
				.at(-1);
			if (!v) this.error(`Could not resolve ${pkg} for range ${range}`);
			lockDeps[pkg] = { version: v };
		}
		await writeLockfile(cwd, { lockfileVersion: 1, dependencies: lockDeps });
		this.log(`Added ${name}@${depRange}`);
	}
}
