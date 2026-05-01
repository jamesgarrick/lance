import { writeFile } from "node:fs/promises";
import { compileFile } from "./compiler/compile";

async function main(): Promise<void> {
	const [, , command, entryFilePath, outputFilePath] = process.argv;

	if (command !== "compile" || !entryFilePath) {
		printUsage();
		process.exitCode = 1;
		return;
	}

	const result = await compileFile(entryFilePath);

	if (outputFilePath) {
		await writeFile(outputFilePath, result.sqf);
	} else {
		console.log(result.sqf);
	}

	if (result.diagnostics.length > 0) {
		console.error(formatDiagnostics(result.diagnostics));
	}

	if (
		result.diagnostics.some((diagnostic) => diagnostic.severity === "error")
	) {
		process.exitCode = 1;
	}
}

function printUsage(): void {
	console.error("Usage: bun run compile <entry-file> [output-file]");
}

function formatDiagnostics(
	diagnostics: readonly {
		readonly code: string;
		readonly severity: string;
		readonly message: string;
		readonly phase?: string;
		readonly span?: {
			readonly filePath: string;
			readonly line?: number;
			readonly column?: number;
		};
	}[],
): string {
	return diagnostics
		.map((diagnostic) => {
			const location = diagnostic.span
				? `${diagnostic.span.filePath}${diagnostic.span.line ? `:${diagnostic.span.line}` : ""}`
				: "unknown";
			const phase = diagnostic.phase ? ` [${diagnostic.phase}]` : "";
			return `${diagnostic.severity.toUpperCase()} ${diagnostic.code}${phase} ${location}\n${diagnostic.message}`;
		})
		.join("\n\n");
}

await main();
