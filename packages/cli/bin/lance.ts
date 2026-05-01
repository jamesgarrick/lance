#!/usr/bin/env bun
import { handle, ux } from "@oclif/core";
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
import Upgrade from "../src/commands/upgrade.ts";
import WhoAmI from "../src/commands/whoami.ts";

const [command, ...rest] = process.argv.slice(2);
const flagColor = (text: string): string => ux.colorize("#6fb3ff", text);
const errorColor = (text: string): string => ux.colorize("red", text);
const cmdColor = (text: string): string => ux.colorize("#6fb3ff", text);

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
		upgrade: Upgrade,
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
				`  lance <command> ${flagColor("[options]")}`,
				"",
				"Commands:",
				`  ${cmdColor("init")}      Initialize a new Lance project`,
				`  ${cmdColor("compile")}   Compile a Lance project to SQF`,
				`  ${cmdColor("add")}       Add a dependency`,
				`  ${cmdColor("remove")}    Remove a dependency`,
				`  ${cmdColor("install")}   Install dependencies from lockfile`,
				`  ${cmdColor("search")}    Search registry packages`,
				`  ${cmdColor("info")}      Show package metadata`,
				`  ${cmdColor("login")}     Save auth token (~/.lancerc)`,
				`  ${cmdColor("logout")}    Clear auth token`,
				`  ${cmdColor("whoami")}    Show current authenticated user`,
				`  ${cmdColor("publish")}   Publish current package`,
				`  ${cmdColor("unpublish")} Unpublish package version (<72h)`,
				`  ${cmdColor("outdated")}  Show newer versions`,
				`  ${cmdColor("update")}    Refresh lockfile to latest compatible`,
				`  ${cmdColor("upgrade")}   Upgrade the Lance CLI`,
				`  ${cmdColor("list")}      Show resolved deps`,
				"",
				`Run \`lance <command> ${flagColor("--help")}\` for command-specific help.`,
			].join("\n"),
		);
	} else {
		console.error(
			`${errorColor("Error")}: Unknown command: ${command}\nRun \`lance ${flagColor("--help")}\` for available commands.`,
		);
		process.exit(1);
	}
} catch (err) {
	await handle(err as Error);
}
