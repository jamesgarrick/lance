export interface LanceConfig {
	name: string;
	version: string;
	type: "mission" | "library";
	private?: boolean;
	exports?: string | string[];
	include?: string[];
	dependencies?: { [name: string]: string };
}
