import { mkdir, rm, unlink } from "node:fs/promises";
import { join } from "node:path";
import * as tar from "tar";

export async function installDependency(
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
	const url = `${registry}/tarball?name=${encodeURIComponent(pkgName)}&version=${encodeURIComponent(version)}`;

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
