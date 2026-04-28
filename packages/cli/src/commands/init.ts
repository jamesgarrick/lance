import { confirm, input, number, select } from "@inquirer/prompts";
import { Command } from "@oclif/core";
import { basename, join, resolve, dirname } from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";


export default class Init extends Command {
  static override id = "init";
  static override description = "Initialize a new Lance project in the current directory";
  static override examples = ["<%= config.bin %> init"];

  async run(): Promise<void> {
    const cwd = process.cwd();
    const configPath = join(cwd, "lance.config.toml");

    if (await Bun.file(configPath).exists()) {
      this.error("lance.config.toml already exists in this directory");
    }

    this.log("Initializing a new Lance project...\n");

    const name = await input({
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

    const author = await input({ message: "Author" });

    const entrypoint =
      type === "mission"
        ? await input({ message: "Entrypoint file", default: "src/init.ts" })
        : await input({ message: "Entrypoint file", default: "src/index.ts" });

    const outDir = await input({ message: "Output directory", default: "output" });

    let missionToml = "";

    if (type === "mission") {
      const gameType = await select({
        message: "Game type",
        choices: [
          { value: "COOP" },
          { value: "TVT" },
          { value: "TDM" },
          { value: "CTF" },
          { value: "TOW" },
          { value: "COOPAH" },
          { value: "Sandbox" },
        ],
      });

      const minPlayers = await number({ message: "Min players", default: 1 });
      const maxPlayers = await number({ message: "Max players", default: 8 });

      const respawn = await select({
        message: "Respawn type",
        choices: [
          { name: "BASE — respawn at base", value: "BASE" },
          { name: "GROUP — respawn with group", value: "GROUP" },
          { name: "INSTANT — instant respawn", value: "INSTANT" },
          { name: "SIDE — respawn on side", value: "SIDE" },
          { name: "BIRD — spectator bird cam", value: "BIRD" },
          { name: "NONE — no respawn", value: "NONE" },
        ],
      });

      const respawnDelay = await number({ message: "Respawn delay (seconds)", default: 5 });
      const enableDebugConsole = await select({
        message: "Enable debug console",
        choices: [
          { name: "Disabled", value: 0 },
          { name: "Admin only", value: 1 },
          { name: "All players", value: 2 },
        ],
      });

      missionToml = `
[mission]
onLoadName = "${escToml(name)}"
briefingName = "${escToml(name)}"
author = "${escToml(author)}"
gameType = "${gameType}"
minPlayers = ${minPlayers ?? 1}
maxPlayers = ${maxPlayers ?? 8}
respawn = "${respawn}"
respawnDelay = ${respawnDelay ?? 5}
enableDebugConsole = ${enableDebugConsole}
`;
    }

    const configToml = `[project]
name = "${escToml(name)}"
type = "${type}"
${missionToml}
[build]
entrypoint = "${entrypoint}"
outDir = "${outDir}"
typesPackage = "@lance/core"
`;

    await Bun.write(configPath, configToml);
    this.log(`  Created lance.config.toml`);

    await writeProjectTsConfig(cwd);
    this.log(`  Created tsconfig.json`);

    const entrypointPath = resolve(cwd, entrypoint);
    if (!(await Bun.file(entrypointPath).exists())) {
      await Bun.write(entrypointPath, entrypointTemplate(type));
      this.log(`  Created ${entrypoint}`);
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const corePath = resolve(__dirname, "../../../core");
    // const tsPluginPath = resolve(__dirname, "../../../ts-plugin");
    const coreSpec = existsSync(corePath) ? `@lance/core@file:${corePath}` : "@lance/core";
    // const tsPluginSpec = existsSync(tsPluginPath)
    //   ? `@lance/ts-plugin@file:${tsPluginPath}`
    //   : "@lance/ts-plugin";

    execSync(`bun add ${coreSpec}`, {
      cwd,
      stdio: "inherit",
    });

    // TODO(cli): Future `lance add <mod>` flow should:
    // 1) install the mod package,
    // 2) detect exported `CfgContribution`,
    // 3) update project config,
    // 4) regenerate merged cfg runtime + static cfg typings.
    // Deferred for now until add/remove package lifecycle is implemented.

    this.log(`\nDone! Run \`lance compile\` to build your project.`);
  }
}

function escToml(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

async function writeProjectTsConfig(cwd: string): Promise<void> {
  const tsconfigPath = join(cwd, "tsconfig.json");
  if (await Bun.file(tsconfigPath).exists()) return;

  const tsconfig = {
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

  await Bun.write(tsconfigPath, JSON.stringify(tsconfig, null, 2) + "\n");
}

function entrypointTemplate(type: "mission" | "library"): string {
  if (type === "mission") {
    return `import { player } from "@lance/core";\n\n// Mission entry point\n`;
  }
  return `// Library entry point\n`;
}
