#!/usr/bin/env bun
import { handle } from "@oclif/core";
import Compile from "../src/commands/compile.ts";
import Init from "../src/commands/init.ts";

const [command, ...rest] = process.argv.slice(2);

try {
  if (command === "init") {
    await Init.run(rest);
  } else if (command === "compile") {
    await Compile.run(rest);
  } else if (!command || command === "--help" || command === "-h") {
    console.log(
      [
        "Lance — TypeScript to SQF transpiler",
        "",
        "Usage:",
        "  lance <command> [options]",
        "",
        "Commands:",
        "  init      Initialize a new Lance project",
        "  compile   Compile a Lance project to SQF",
        "",
        "Run `lance <command> --help` for command-specific help.",
      ].join("\n"),
    );
  } else {
    console.error(`Unknown command: ${command}\nRun \`lance --help\` for available commands.`);
    process.exit(1);
  }
} catch (err) {
  await handle(err as Error);
}
