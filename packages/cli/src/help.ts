import { Help, ux } from "@oclif/core";

export default class LanceHelp extends Help {
	override section(header: string, body: Parameters<Help["section"]>[1]): string {
		const formatted = super.section(header, body);
		const coloredHeader = ux.colorize("cyan", header);
		return formatted.replace(header, coloredHeader);
	}

	protected override formatCommands(commands: Array<import("@oclif/core").Command.Loadable>): string {
		const formatted = super.formatCommands(commands);
		return formatted.replace(
			/^(\s+)([a-z0-9:_-]+)(\s+)/gim,
			(_match, lead, commandName, gap) =>
				`${lead}${ux.colorize("green", commandName)}${gap}`,
		);
	}
}
