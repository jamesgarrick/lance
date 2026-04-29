#!/usr/bin/env bun
import { handle } from "@oclif/core";
import Add from "../src/commands/add.ts";
import Compile from "../src/commands/compile.ts";
import Info from "../src/commands/info.ts";
import Init from "../src/commands/init.ts";
import Install from "../src/commands/install.ts";
import List from "../src/commands/list.ts";
import Login from "../src/commands/login.ts";
import Logout from "../src/commands/logout.ts";
import Outdated from "../src/commands/outdated.ts";
import Publish from "../src/commands/publish.ts";
import Remove from "../src/commands/remove.ts";
import Search from "../src/commands/search.ts";
import Unpublish from "../src/commands/unpublish.ts";
import Update from "../src/commands/update.ts";
import WhoAmI from "../src/commands/whoami.ts";

const [command, ...rest] = process.argv.slice(2);

try {
  const commands: Record<string, any> = {
    init: Init,
    compile: Compile,
    add: Add,
    remove: Remove,
    install: Install,
    i: Install,
    search: Search,
    info: Info,
    login: Login,
    logout: Logout,
    whoami: WhoAmI,
    publish: Publish,
    unpublish: Unpublish,
    outdated: Outdated,
    update: Update,
    list: List,
  };
  const cmd = command ? commands[command] : undefined;
  if (cmd) {
    await cmd.run(rest);
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
        "  add       Add a dependency",
        "  remove    Remove a dependency",
        "  install   Install dependencies from lockfile",
        "  search    Search registry packages",
        "  info      Show package metadata",
        "  login     Save auth token (~/.lancerc)",
        "  logout    Clear auth token",
        "  whoami    Show current authenticated user",
        "  publish   Publish current package",
        "  unpublish Unpublish package version (<72h)",
        "  outdated  Show newer versions",
        "  update    Refresh lockfile to latest compatible",
        "  list      Show resolved deps",
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
