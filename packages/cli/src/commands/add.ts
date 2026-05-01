import { Args, Command, Flags } from "@oclif/core";
import { mkdir, rm, unlink } from "node:fs/promises";
import { join } from "node:path";
import semver from "semver";
import * as tar from "tar";
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
		await installOneDependency(cwd, registry, name, lockDeps[name]!.version);
		this.log(`Added ${name}@${depRange}`);
	}
}

async function installOneDependency(
	cwd: string,
	registry: string,
	pkgName: string,
	version: string,
): Promise<void> {
	const [scope, name] = pkgName.split("/");
	if (!scope || !name) {
		throw new Error(`Invalid dependency name: ${pkgName}`);
	}

	const modulesDir = join(cwd, "lance_modules");
	const targetDir = join(modulesDir, scope, name);
	const tempTarballPath = join(
		modulesDir,
		`.tmp-${scope.replaceAll("/", "_")}-${name}-${version}.tgz`,
	);
	const url = `${registry}/packages/${encodeURIComponent(pkgName)}/versions/${encodeURIComponent(version)}/tarball`;

	await mkdir(modulesDir, { recursive: true });
	const res = await fetch(url);
	if (!res.ok) {
		const text = await res.text();
		const snippet = text.slice(0, 200).replace(/\s+/g, " ").trim();
		throw new Error(
			`Failed to download ${pkgName}@${version} from ${url}: ${res.status} ${res.statusText} ${snippet}`,
		);
	}

	await Bun.write(tempTarballPath, new Uint8Array(await res.arrayBuffer()));
	await rm(targetDir, { recursive: true, force: true });
	await mkdir(targetDir, { recursive: true });
	await tar.x({ file: tempTarballPath, cwd: targetDir });
	await unlink(tempTarballPath).catch(() => undefined);
}
