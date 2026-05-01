import { Args, Command, Flags } from "@oclif/core";
import semver from "semver";
import {
	defaultRegistry,
	ensurePackageName,
	readManifest,
	splitPackageAndVersion,
	writeLockfile,
	writeManifest,
} from "../lib/manifest";
import { installDependency } from "../lib/install-dependency";
import { registryFetch } from "../lib/registry-client";
import { writeGeneratedTsconfigPaths } from "../lib/tsconfig-paths";

interface PackageInfoResponse {
	name: string;
	versions: string[];
}

export default class Add extends Command {
	static override id = "add";
	static override description = "Add a dependency to lance.config.ts";
	static override args = {
		spec: Args.string({
			description: "Dependency spec: @scope/name[@version|@range]",
			required: true,
		}),
	};
	static override flags = {
		exact: Flags.boolean({
			description: "Pin exact version instead of ^range",
			default: false,
		}),
	};

	async run(): Promise<void> {
		const { flags, args } = await this.parse(Add);
		const spec = args.spec;
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
					: defaultRangeForVersion(version)
				: version
			: flags.exact
				? resolved
				: defaultRangeForVersion(resolved);

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
			const v = semver.maxSatisfying(pkgInfo.versions, range);
			if (!v) this.error(`Could not resolve ${pkg} for range ${range}`);
			lockDeps[pkg] = { version: v };
		}
		await writeLockfile(cwd, { lockfileVersion: 1, dependencies: lockDeps });
		await writeGeneratedTsconfigPaths(cwd, lockDeps);
		await installDependency(cwd, registry, name, lockDeps[name]!.version);
		this.log(`Added ${name}@${depRange}`);
	}
}

function defaultRangeForVersion(version: string): string {
	const parsed = semver.parse(version);
	if (!parsed) return `^${version}`;
	if (parsed.major === 0) return `~${version}`;
	return `^${version}`;
}
