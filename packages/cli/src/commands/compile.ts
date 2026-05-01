import {
	compileFromConfig,
	formatCompilerDiagnostic,
	formatDiagnosticSummary,
	loadLanceConfig,
} from "@lance/compiler";
import { Command, Flags, ux } from "@oclif/core";
import { mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

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
		const result = await compileFromConfig(config, projectRoot).catch(
			(err: unknown) => {
				this.error(err instanceof Error ? err.message : String(err));
			},
		);

		if (result.diagnostics.some((d) => d.severity === "error")) {
			for (const d of result.diagnostics) {
				this.log(colorizeDiagnostic(formatCompilerDiagnostic(d)));
			}
			for (const phase of result.phases) {
				const duration = `${phase.durationMs.toFixed(1)}ms`;
				const note = phase.note ? ` (${phase.note})` : "";
				this.log(
					`Phase ${phase.phase}: ${phase.status} (${duration}, ${phase.errorCount} error(s), ${phase.diagnosticCount} diagnostic(s))${note}`,
				);
			}
			this.error(
				`Compilation failed with errors: ${formatDiagnosticSummary(result.diagnostics)}`,
			);
		}

		for (const d of result.diagnostics.filter((d) => d.severity !== "error")) {
			this.log(colorizeDiagnostic(formatCompilerDiagnostic(d)));
		}

		// Write all SQF output files
		for (const file of result.outputFiles) {
			const dest = join(outDir, file.path);
			await mkdir(dirname(dest), { recursive: true });
			await Bun.write(dest, file.content);
			this.log(`  Wrote ${displayPath(outDir, dest)}`);
		}

		// Write description.ext
		if (result.descriptionExt !== null) {
			const dest = join(outDir, "description.ext");
			await Bun.write(dest, result.descriptionExt);
			this.log(`  Wrote ${displayPath(outDir, dest)}`);
		}

		// Write CfgFunctions.hpp
		if (result.cfgFunctionsHpp !== null) {
			const dest = join(outDir, "CfgFunctions.hpp");
			await Bun.write(dest, result.cfgFunctionsHpp);
			this.log(`  Wrote ${displayPath(outDir, dest)}`);
		}

		const elapsed = ((Date.now() - startMs) / 1000).toFixed(2);
		this.log(`\nDone in ${elapsed}s`);
	}
}

function displayPath(outDir: string, dest: string): string {
	return dest.startsWith(outDir) ? dest.slice(outDir.length + 1) : dest;
}

function colorizeDiagnostic(text: string): string {
	if (text.includes(" ERROR ")) return ux.colorize("red", text);
	if (text.includes(" WARNING ")) return ux.colorize("yellow", text);
	return text;
}
