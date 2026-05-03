type PackageInfoResponse = {
	name: string;
	versions: string[];
	dependencies?: Record<string, string>;
	publishedAt?: string | null;
};

function getRegistryBase(): string {
	return (
		process.env.LANCE_REGISTRY_URL ??
		"http://lance-registry-dguc6p-821e3a-64-181-217-234.traefik.me"
	);
}

async function readJson(url: string): Promise<{
	ok: boolean;
	status: number;
	statusText: string;
	body: unknown;
}> {
	const res = await fetch(url);
	const text = await res.text();
	let body: unknown = text;
	try {
		body = text ? JSON.parse(text) : null;
	} catch {
		// Keep raw text body for diagnostics
	}
	return {
		ok: res.ok,
		status: res.status,
		statusText: res.statusText,
		body,
	};
}

function printResult(step: string, result: Awaited<ReturnType<typeof readJson>>): void {
	const status = `${result.status} ${result.statusText}`.trim();
	if (result.ok) {
		console.log(`PASS ${step}: ${status}`);
		return;
	}
	console.log(`FAIL ${step}: ${status}`);
	console.log(`  body: ${JSON.stringify(result.body)}`);
}

async function diagnosePackage(registry: string, pkg: string): Promise<void> {
	console.log(`\nPackage: ${pkg}`);

	const packageUrl = `${registry}/package?name=${encodeURIComponent(pkg)}`;
	const pkgRes = await readJson(packageUrl);
	printResult(`GET /package`, pkgRes);
	if (!pkgRes.ok) return;

	const info = pkgRes.body as PackageInfoResponse;
	if (!Array.isArray(info.versions) || info.versions.length === 0) {
		console.log("FAIL package versions: empty or invalid");
		return;
	}

	const latest = info.versions.at(-1)!;
	console.log(`PASS latest version: ${latest}`);

	const tarballUrl = `${registry}/tarball?name=${encodeURIComponent(pkg)}&version=${encodeURIComponent(latest)}`;
	const tarballRes = await fetch(tarballUrl);
	if (!tarballRes.ok) {
		const text = await tarballRes.text();
		console.log(`FAIL GET /tarball: ${tarballRes.status} ${tarballRes.statusText}`);
		console.log(`  body: ${text.slice(0, 300).replace(/\s+/g, " ").trim()}`);
		return;
	}
	const contentType = tarballRes.headers.get("content-type") ?? "unknown";
	const contentLength = tarballRes.headers.get("content-length") ?? "unknown";
	console.log(`PASS GET /tarball: ${tarballRes.status} (${contentType}, length=${contentLength})`);
}

async function main(): Promise<void> {
	const registry = getRegistryBase().replace(/\/$/, "");
	const names = process.argv.slice(2);
	const packageNames =
		names.length > 0
			? names
			: ["@lance/core", "@lance/std", "@lance/eslint"];

	console.log(`Registry: ${registry}`);
	const health = await readJson(`${registry}/health`);
	printResult("GET /health", health);

	for (const pkg of packageNames) {
		await diagnosePackage(registry, pkg);
	}
}

void main().catch((error: unknown) => {
	const message = error instanceof Error ? error.message : String(error);
	console.error(`FATAL: ${message}`);
	process.exit(1);
});
