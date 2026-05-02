import Update from "./update.js";

export default class Upgrade extends Update {
	static override id = "upgrade";
	static override description =
		"Upgrade lockfile to latest compatible versions";
}
