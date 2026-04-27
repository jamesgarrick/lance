import { confirm, input, number, select } from "@inquirer/prompts";
import { Command } from "@oclif/core";
import { basename, join, resolve, dirname } from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";


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

    const sqfTypesPath = resolve(__dirname, "../../../sqf-types");

    execSync(`bun add lance@file:${sqfTypesPath}`, {
      cwd,
      stdio: "inherit",
    });

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
      lib: ["ESNext"],
      types: ["bun"],
      target: "ESNext",
      module: "Preserve",
      moduleDetection: "force",
      moduleResolution: "bundler",
      allowImportingTsExtensions: true,
      verbatimModuleSyntax: true,
      noEmit: true,
      strict: true,
      skipLibCheck: true,
    },
    include: ["src/**/*.ts"],
  };

  await Bun.write(tsconfigPath, JSON.stringify(tsconfig, null, 2) + "\n");
}

function entrypointTemplate(type: "mission" | "library"): string {
  if (type === "mission") {
    return `import { player } from "lance";\n\n// Mission entry point\n`;
  }
  return `// Library entry point\n`;
}
