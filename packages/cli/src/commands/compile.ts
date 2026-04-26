import { compileFromConfig, loadLanceConfig } from "@lance/transpiler";
import { Command, Flags } from "@oclif/core";
import { basename, join, resolve } from "node:path";

export default class Compile extends Command {
  static override id = "compile";
  static override description = "Compile a Lance project to SQF";
  static override examples = [
    "<%= config.bin %> compile",
    "<%= config.bin %> compile --project ./my-mission",
  ];

  static override flags = {
    project: Flags.string({
      char: "p",
      description: "Path to the project directory (defaults to cwd)",
      default: ".",
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(Compile);
    const projectRoot = resolve(flags.project);

    const config = await loadLanceConfig(projectRoot).catch((err: unknown) => {
      this.error(err instanceof Error ? err.message : String(err));
    });

    const outDir = resolve(projectRoot, config.build.outDir ?? "output");

    this.log(`Compiling ${config.project.name}...`);

    const startMs = Date.now();
    const result = await compileFromConfig(config).catch((err: unknown) => {
      this.error(err instanceof Error ? err.message : String(err));
    });

    if (result.diagnostics.some((d) => d.severity === "error")) {
      for (const d of result.diagnostics) {
        const loc = d.span
          ? `${d.span.filePath}${d.span.line ? `:${d.span.line}` : ""}`
          : "unknown";
        const phase = d.phase ? ` [${d.phase}]` : "";
        this.warn(`${d.severity.toUpperCase()} ${d.code}${phase} ${loc}\n  ${d.message}`);
      }
      this.error("Compilation failed with errors");
    }

    // Warn on non-error diagnostics
    for (const d of result.diagnostics.filter((d) => d.severity !== "error")) {
      const loc = d.span ? ` ${d.span.filePath}${d.span.line ? `:${d.span.line}` : ""}` : "";
      this.warn(`${d.code}${loc}: ${d.message}`);
    }

    // Write compiled SQF
    const entryName = basename(config.build.entrypoint, ".ts");
    const sqfOutPath = join(outDir, `${entryName}.sqf`);
    await Bun.write(sqfOutPath, result.sqf);
    this.log(`  Wrote ${relative(projectRoot, sqfOutPath)}`);

    // Write description.ext for missions
    if (result.descriptionExt !== null) {
      const extOutPath = join(outDir, "description.ext");
      await Bun.write(extOutPath, result.descriptionExt);
      this.log(`  Wrote ${relative(projectRoot, extOutPath)}`);
    }

    const elapsed = ((Date.now() - startMs) / 1000).toFixed(2);
    this.log(`\nDone in ${elapsed}s`);
  }
}

function relative(from: string, to: string): string {
  // Simple relative path for display — strip the project root prefix
  return to.startsWith(from) ? to.slice(from.length + 1) : to;
}
