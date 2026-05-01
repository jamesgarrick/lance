import { Command, Flags } from "@oclif/core";
import { mkdtemp, readFile, rm, writeFile, chmod, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import * as tar from "tar";

export default class Upgrade extends Command {
	static override id = "upgrade";
	static override description = "Upgrade the Lance CLI using GitHub release binaries";
	static override flags = {
		version: Flags.string({
			char: "v",
			description: "Install a specific CLI version",
		}),
	};

	async run(): Promise<void> {
		const { flags } = await this.parse(Upgrade);
		const repo = "jamesgarrick/lance";
		const tag = flags.version ? `@lance/cli@${flags.version}` : "latest";
		const target = platformTarget();
		const tempRoot = await mkdtemp(join(tmpdir(), "lance-upgrade-"));
		const archivePath = join(tempRoot, "lance.tar.gz");
		const extractDir = join(tempRoot, "extract");
		const expectedExec = installedExecutablePath();

		try {
			const release = await fetchRelease(repo, tag);
			const asset = pickAsset(release.assets, target);
			if (!asset) {
				this.error(
					`No release artifact found for ${target}. Available assets: ${release.assets.map((a) => a.name).join(", ")}`,
				);
			}

			this.log(`Downloading ${asset.name}...`);
			await downloadToFile(asset.browser_download_url, archivePath);

			await mkdir(extractDir, { recursive: true });
			await tar.extract({
				file: archivePath,
				cwd: extractDir,
				sync: false,
			});

			const newExecPath = await findExecutableInExtract(extractDir);
			const bytes = await readFile(newExecPath);
			await writeFile(expectedExec, bytes);
			await chmod(expectedExec, 0o755);

			this.log(`Upgraded CLI to ${release.tag_name}.`);
			this.log(`Installed binary: ${expectedExec}`);
		} catch (error) {
			this.error(error instanceof Error ? error.message : String(error));
		} finally {
			await rm(tempRoot, { recursive: true, force: true });
		}
	}
}

interface GitHubAsset {
	name: string;
	browser_download_url: string;
}

interface GitHubRelease {
	tag_name: string;
	assets: GitHubAsset[];
}

async function fetchRelease(repo: string, tag: string): Promise<GitHubRelease> {
	const url =
		tag === "latest"
			? `https://api.github.com/repos/${repo}/releases/latest`
			: `https://api.github.com/repos/${repo}/releases/tags/${encodeURIComponent(tag)}`;

	const res = await fetch(url, {
		headers: {
			Accept: "application/vnd.github+json",
			"User-Agent": "lance-cli",
		},
	});

	if (!res.ok) {
		throw new Error(`Failed to fetch release metadata (${res.status}) from ${url}`);
	}

	return (await res.json()) as GitHubRelease;
}

function platformTarget(): string {
	const platform = process.platform;
	const arch = process.arch;
	if (platform === "darwin" && arch === "arm64") return "darwin-arm64";
	if (platform === "darwin" && arch === "x64") return "darwin-x64";
	if (platform === "linux" && arch === "arm64") return "linux-arm64";
	if (platform === "linux" && arch === "x64") return "linux-x64";
	if (platform === "win32" && arch === "x64") return "win32-x64";
	throw new Error(`Unsupported platform/arch: ${platform}/${arch}`);
}

function pickAsset(assets: GitHubAsset[], target: string): GitHubAsset | undefined {
	return assets.find(
		(asset) => asset.name.includes(target) && asset.name.endsWith(".tar.gz"),
	);
}

async function downloadToFile(url: string, outputPath: string): Promise<void> {
	const res = await fetch(url, {
		headers: { "User-Agent": "lance-cli" },
	});
	if (!res.ok) {
		throw new Error(`Failed to download release asset (${res.status})`);
	}
	const content = await res.arrayBuffer();
	await writeFile(outputPath, Buffer.from(content));
}

async function findExecutableInExtract(extractDir: string): Promise<string> {
	const candidate = join(extractDir, "bin", "lance");
	try {
		await readFile(candidate);
		return candidate;
	} catch {
		throw new Error(
			`Could not find lance executable in extracted archive at ${candidate}`,
		);
	}
}

function installedExecutablePath(): string {
	const which = Bun.spawnSync(["which", "lance"], { stdout: "pipe", stderr: "pipe" });
	if (which.exitCode !== 0) {
		throw new Error("Unable to locate installed `lance` executable in PATH");
	}

	const path = new TextDecoder().decode(which.stdout).trim();
	if (!path) {
		throw new Error("`which lance` returned an empty path");
	}
	return path;
}
