export type RespawnType =
	| 0
	| 1
	| 2
	| 3
	| 4
	| 5
	| "NONE"
	| "BIRD"
	| "INSTANT"
	| "BASE"
	| "GROUP"
	| "SIDE";

export type EnableDebugConsole = 0 | 1 | 2;

export interface MissionParam {
	/** Class name used in class Params { class <name> {...}; }; */
	name: string;
	title: string;
	values: number[];
	texts: string[];
	default: number;
}

export interface DebriefingEnd {
	/** Class name used in class CfgDebriefing { class <name> {...}; }; */
	name: string;
	title: string;
	description?: string;
	pictureBackground?: string;
	soundBackground?: string;
}

export interface SoundEntry {
	/** Class name used in class CfgSounds { class <name> {...}; }; */
	name: string;
	file: string;
	volume?: number;
	pitch?: number;
}

export interface MusicEntry {
	/** Class name used in class CfgMusic { class <name> {...}; }; */
	name: string;
	file: string;
	volume?: number;
}

export interface RadioEntry {
	/** Class name used in class CfgRadio */
	name: string;
	text?: string;
	voice?: string;
}

export interface FunctionEntry {
	/** Tag prefix, e.g. "TAG" for TAG_fnc_name */
	tag: string;
	/** Function name, e.g. "myFunction" for TAG_fnc_myFunction */
	name: string;
	file?: string;
	preInit?: boolean;
	postInit?: boolean;
	recompile?: boolean;
	ext?: string;
}

export interface MissionConfig {
	// Loading screen
	onLoadName?: string;
	onLoadMission?: string;
	onLoadIntro?: string;
	onLoadIntroTime?: boolean;

	// Briefing
	briefingName?: string;

	// Overview
	overviewText?: string;
	overviewPicture?: string;
	overviewMusic?: string;

	// Attribution
	author?: string;

	// Game type — emitted inside class Header
	gameType?: string;
	minPlayers?: number;
	maxPlayers?: number;

	// Respawn
	respawn?: RespawnType;
	respawnDelay?: number;
	respawnDialog?: boolean;
	respawnOnStart?: number;
	respawnTemplates?: string[];

	// Players / AI
	disabledAI?: boolean;
	joinUnassigned?: boolean;
	scriptedAssignTeams?: boolean;

	// Debug / tools
	enableDebugConsole?: EnableDebugConsole;
	saving?: 0 | 1;
	allowFunctionsLog?: 0 | 1;

	// UI
	hideBriefing?: boolean;
	hideRemoteControl?: boolean;

	// HUD elements
	showCompass?: boolean;
	showGPS?: boolean;
	showMap?: boolean;
	showWatch?: boolean;
	showHUD?: boolean;
	showUAVFeed?: boolean;
	showWarrant?: boolean;
	showScore?: boolean;
	showCurator?: boolean;

	// Legacy simple params (titleParam1/titleParam2 style)
	titleParam1?: string;
	titleParam2?: string;
	values1?: number[];
	values2?: number[];
	texts1?: string[];
	texts2?: string[];
	deflt1?: number;
	deflt2?: number;

	// Complex sections — use [[mission.param]], [[mission.debriefing]], etc. in TOML
	param?: MissionParam[];
	debriefing?: DebriefingEnd[];
	sound?: SoundEntry[];
	music?: MusicEntry[];
	radio?: RadioEntry[];
	function?: FunctionEntry[];
}

export type ProjectType = "mission" | "library";

export interface ProjectConfig {
	name: string;
	type: ProjectType;
	version?: string;
}

export interface BuildConfig {
	entrypoint: string;
	/** SQF function name prefix. Default: "LNC" */
	tag?: string;
	outDir?: string;
	tsConfig?: string;
	typesPackage?: string;
	typesPackageRoot?: string;
	/** Root directory for source files, used for SQF function naming. Default: "src" */
	sourceRoot?: string;
}

export interface LanceConfig {
	project: ProjectConfig;
	/** Only present for mission-type projects */
	mission?: MissionConfig;
	build: BuildConfig;
}
