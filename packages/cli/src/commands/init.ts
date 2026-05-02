import { confirm, input, select } from "@inquirer/prompts";
import { Command } from "@oclif/core";
import { basename, join, resolve, dirname } from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";
import { LOCK_FILE, MANIFEST_FILE } from "../lib/manifest.js";
import { getToken } from "../lib/auth.js";
import { registryFetch } from "../lib/registry-client.js";
import { writeGeneratedTsconfigPaths } from "../lib/tsconfig-paths.js";

export default class Init extends Command {
	static override id = "init";
	static override description =
		"Initialize a new Lance project in the current directory";
	static override examples = ["<%= config.bin %> init"];

	async run(): Promise<void> {
		const cwd = process.cwd();
		const manifestPath = join(cwd, MANIFEST_FILE);

		if (await Bun.file(manifestPath).exists()) {
			this.error(`${MANIFEST_FILE} already exists in this directory`);
		}

		this.log("Initializing a new Lance project...\n");

		const projectName = await input({
			message: "Project name",
			default: basename(cwd),
		});

		const type = await select({
			message: "Project type",
			choices: [
				{ name: "mission", value: "mission" as const },
				{ name: "library", value: "library" as const },
			],
		});

		const defaultRegistry = process.env.LANCE_REGISTRY_URL ?? "http://localhost:8787";
		const defaultPackageName =
			type === "library"
				? await suggestDefaultPackageName(defaultRegistry, projectName).catch(
						() => `@local/${projectName}`,
					)
				: `@local/${projectName}`;

		const packageName = await input({
			message: "Package name",
			default: defaultPackageName,
		});

		const entrypointDefault = type === "mission" ? "./src/init.ts" : "./src/index.ts";
		const exportsPath = await input({
			message: "Exports entrypoint",
			default: entrypointDefault,
		});

		const includeAssets = await confirm({
			message: "Include common asset globs (assets/**/*)?",
			default: type === "library",
		});

		const include = includeAssets ? ["assets/**/*"] : [];

		await Bun.write(
			manifestPath,
			[
				'import type { LanceConfig } from "@lance/core";',
				"",
				"export default {",
				`  name: ${JSON.stringify(packageName)},`,
				'  version: "0.0.1",',
				`  type: ${JSON.stringify(type)},`,
				`  exports: ${JSON.stringify(exportsPath)},`,
				`  include: ${JSON.stringify(include)},`,
				"  dependencies: {},",
				"} satisfies LanceConfig;",
				"",
			].join("\n"),
		);
		this.log(`  Created ${MANIFEST_FILE}`);

		const lockPath = join(cwd, LOCK_FILE);
		if (!(await Bun.file(lockPath).exists())) {
			await Bun.write(
				lockPath,
				`${JSON.stringify({ lockfileVersion: 1, dependencies: {} }, null, 2)}\n`,
			);
			this.log(`  Created ${LOCK_FILE}`);
		}
		await writeGeneratedTsconfigPaths(cwd, {});
		this.log("  Created lance_modules/tsconfig.paths.json");

		if (await writeProjectGitignore(cwd)) {
			this.log("  Created .gitignore");
		}

		await writeProjectTsConfig(cwd);
		this.log("  Created tsconfig.json");

		const entrypointPath = resolve(cwd, exportsPath);
		if (!(await Bun.file(entrypointPath).exists())) {
			await Bun.write(entrypointPath, entrypointTemplate(type));
			this.log(`  Created ${exportsPath}`);
		}

		const __filename = fileURLToPath(import.meta.url);
		const __dirname = dirname(__filename);
		const corePath = resolve(__dirname, "../../../core");
		const coreSpec = existsSync(corePath)
			? `@lance/core@file:${corePath}`
			: "@lance/core";

		execSync(`bun add ${coreSpec}`, {
			cwd,
			stdio: "inherit",
		});

		this.log("\nDone! You can publish with `lance publish`.");
	}
}

async function suggestDefaultPackageName(
	registry: string,
	projectName: string,
): Promise<string> {
	const token = await getToken();
	if (!token) return `@local/${projectName}`;
	const me = await registryFetch<{ user: string }>(registry, "/auth/whoami", {
		token,
	});
	return `@${me.user}/${projectName}`;
}

async function writeProjectTsConfig(cwd: string): Promise<void> {
	const tsconfigPath = join(cwd, "tsconfig.json");
	if (await Bun.file(tsconfigPath).exists()) return;

	const tsconfig = {
		extends: "./lance_modules/tsconfig.paths.json",
		compilerOptions: {
			strict: true,
			noLib: true,
			skipLibCheck: true,
			moduleResolution: "bundler",
			module: "ESNext",
			types: [],
			plugins: [{ name: "@lance/ts-plugin" }],
		},
		files: ["./node_modules/@lance/core/globals.d.ts"],
		include: ["**/*.ts"],
	};

	await Bun.write(tsconfigPath, `${JSON.stringify(tsconfig, null, 2)}\n`);
}

async function writeProjectGitignore(cwd: string): Promise<boolean> {
	const gitignorePath = join(cwd, ".gitignore");
	if (await Bun.file(gitignorePath).exists()) return false;
	await Bun.write(gitignorePath, "lance.lock\nlance_modules\n");
	return true;
}

function entrypointTemplate(type: "mission" | "library"): string {
	if (type === "mission") {
		return 'import { player } from "@lance/core";\n\n// Mission entry point\n';
	}
	return "// Library entry point\n";
}
