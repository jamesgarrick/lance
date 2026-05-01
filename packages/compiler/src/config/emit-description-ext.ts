import type {
	DebriefingEnd,
	FunctionEntry,
	MissionConfig,
	MissionParam,
	MusicEntry,
	RadioEntry,
	SoundEntry,
} from "./schema";

export function emitDescriptionExt(mission: MissionConfig): string {
	const sections: string[] = [];

	const root = emitRootFields(mission);
	if (root) sections.push(root);

	const header = emitHeaderClass(mission);
	if (header) sections.push(header);

	if (mission.param?.length) sections.push(emitParamsClass(mission.param));
	if (mission.debriefing?.length)
		sections.push(emitDebriefingClass(mission.debriefing));
	if (mission.sound?.length) sections.push(emitSoundsClass(mission.sound));
	if (mission.music?.length) sections.push(emitMusicClass(mission.music));
	if (mission.radio?.length) sections.push(emitRadioClass(mission.radio));
	if (mission.function?.length)
		sections.push(emitFunctionsClass(mission.function));

	return sections.join("\n\n");
}

// ─── root-level fields ────────────────────────────────────────────────────────

function emitRootFields(m: MissionConfig): string {
	const lines: string[] = [];

	str(lines, "onLoadName", m.onLoadName);
	str(lines, "onLoadMission", m.onLoadMission);
	str(lines, "onLoadIntro", m.onLoadIntro);
	bool(lines, "onLoadIntroTime", m.onLoadIntroTime);
	str(lines, "briefingName", m.briefingName);
	str(lines, "overviewText", m.overviewText);
	str(lines, "overviewPicture", m.overviewPicture);
	str(lines, "overviewMusic", m.overviewMusic);
	str(lines, "author", m.author);

	if (m.respawn !== undefined) {
		if (typeof m.respawn === "string") {
			str(lines, "respawn", m.respawn);
		} else {
			num(lines, "respawn", m.respawn);
		}
	}
	num(lines, "respawnDelay", m.respawnDelay);
	bool(lines, "respawnDialog", m.respawnDialog);
	num(lines, "respawnOnStart", m.respawnOnStart);
	strArr(lines, "respawnTemplates", m.respawnTemplates);

	bool(lines, "disabledAI", m.disabledAI);
	bool(lines, "joinUnassigned", m.joinUnassigned);
	bool(lines, "scriptedAssignTeams", m.scriptedAssignTeams);

	num(lines, "enableDebugConsole", m.enableDebugConsole);
	num(lines, "saving", m.saving);
	num(lines, "allowFunctionsLog", m.allowFunctionsLog);

	bool(lines, "hideBriefing", m.hideBriefing);
	bool(lines, "hideRemoteControl", m.hideRemoteControl);

	bool(lines, "showCompass", m.showCompass);
	bool(lines, "showGPS", m.showGPS);
	bool(lines, "showMap", m.showMap);
	bool(lines, "showWatch", m.showWatch);
	bool(lines, "showHUD", m.showHUD);
	bool(lines, "showUAVFeed", m.showUAVFeed);
	bool(lines, "showWarrant", m.showWarrant);
	bool(lines, "showScore", m.showScore);
	bool(lines, "showCurator", m.showCurator);

	// Legacy param1/param2
	str(lines, "titleParam1", m.titleParam1);
	numArr(lines, "values1", m.values1);
	strArr(lines, "texts1", m.texts1);
	num(lines, "deflt1", m.deflt1);

	str(lines, "titleParam2", m.titleParam2);
	numArr(lines, "values2", m.values2);
	strArr(lines, "texts2", m.texts2);
	num(lines, "deflt2", m.deflt2);

	return lines.join("\n");
}

// ─── class Header ─────────────────────────────────────────────────────────────

function emitHeaderClass(m: MissionConfig): string | null {
	if (
		m.gameType === undefined &&
		m.minPlayers === undefined &&
		m.maxPlayers === undefined
	) {
		return null;
	}

	const inner: string[] = [];
	str(inner, "gameType", m.gameType);
	num(inner, "minPlayers", m.minPlayers);
	num(inner, "maxPlayers", m.maxPlayers);

	return classBlock("Header", inner.join("\n"));
}

// ─── class Params ─────────────────────────────────────────────────────────────

function emitParamsClass(params: MissionParam[]): string {
	const inner = params
		.map((p) => {
			const lines: string[] = [];
			str(lines, "title", p.title);
			numArr(lines, "values", p.values);
			strArr(lines, "texts", p.texts);
			num(lines, "deflt", p.default);
			return classBlock(p.name, lines.join("\n"));
		})
		.join("\n");

	return classBlock("Params", inner);
}

// ─── class CfgDebriefing ──────────────────────────────────────────────────────

function emitDebriefingClass(ends: DebriefingEnd[]): string {
	const inner = ends
		.map((e) => {
			const lines: string[] = [];
			str(lines, "title", e.title);
			if (e.description !== undefined) str(lines, "description", e.description);
			if (e.pictureBackground !== undefined)
				str(lines, "pictureBackground", e.pictureBackground);
			if (e.soundBackground !== undefined)
				str(lines, "soundBackground", e.soundBackground);
			return classBlock(e.name, lines.join("\n"));
		})
		.join("\n");

	return classBlock("CfgDebriefing", inner);
}

// ─── class CfgSounds ──────────────────────────────────────────────────────────

function emitSoundsClass(sounds: SoundEntry[]): string {
	const names = sounds.map((s) => `"${s.name}"`).join(", ");
	const header = `    sounds[] = {${names}};`;

	const entries = sounds
		.map((s) => {
			const vol = s.volume ?? 1;
			const pitch = s.pitch ?? 1;
			const inner = `    name = "${escStr(s.name)}";\n    sound[] = {"${escStr(s.file)}", ${vol}, ${pitch}};`;
			return classBlock(s.name, inner);
		})
		.join("\n");

	return `class CfgSounds\n{\n${header}\n${entries}\n};`;
}

// ─── class CfgMusic ───────────────────────────────────────────────────────────

function emitMusicClass(tracks: MusicEntry[]): string {
	const names = tracks.map((t) => `"${t.name}"`).join(", ");
	const header = `    tracks[] = {${names}};`;

	const entries = tracks
		.map((t) => {
			const vol = t.volume ?? 1;
			const inner = `    name = "${escStr(t.name)}";\n    sound[] = {"${escStr(t.file)}", ${vol}};`;
			return classBlock(t.name, inner);
		})
		.join("\n");

	return `class CfgMusic\n{\n${header}\n${entries}\n};`;
}

// ─── class CfgRadio ───────────────────────────────────────────────────────────

function emitRadioClass(entries: RadioEntry[]): string {
	const inner = entries
		.map((r) => {
			const lines: string[] = [];
			if (r.text !== undefined) str(lines, "text", r.text);
			if (r.voice !== undefined) str(lines, "voice", r.voice);
			return classBlock(r.name, lines.join("\n"));
		})
		.join("\n");

	return classBlock("CfgRadio", inner);
}

// ─── class CfgFunctions ───────────────────────────────────────────────────────

function emitFunctionsClass(functions: FunctionEntry[]): string {
	const byTag = new Map<string, FunctionEntry[]>();
	for (const fn of functions) {
		const group = byTag.get(fn.tag) ?? [];
		group.push(fn);
		byTag.set(fn.tag, group);
	}

	const tagBlocks = [...byTag.entries()]
		.map(([tag, fns]) => {
			const fnBlocks = fns
				.map((fn) => {
					const lines: string[] = [];
					if (fn.file !== undefined) str(lines, "file", fn.file);
					if (fn.preInit !== undefined) bool(lines, "preInit", fn.preInit);
					if (fn.postInit !== undefined) bool(lines, "postInit", fn.postInit);
					if (fn.recompile !== undefined)
						bool(lines, "recompile", fn.recompile);
					if (fn.ext !== undefined) str(lines, "ext", fn.ext);
					return classBlock(fn.name, lines.join("\n"));
				})
				.join("\n");
			return classBlock(tag, fnBlocks);
		})
		.join("\n");

	return classBlock("CfgFunctions", tagBlocks);
}

// ─── helpers ──────────────────────────────────────────────────────────────────

function classBlock(name: string, inner: string): string {
	const indented = inner
		.split("\n")
		.map((l) => (l.length ? `    ${l}` : l))
		.join("\n");
	return `class ${name}\n{\n${indented}\n};`;
}

function escStr(s: string): string {
	return s.replace(/\\/g, "\\").replace(/"/g, '\\"');
}

function str(lines: string[], key: string, value: string | undefined): void {
	if (value !== undefined) lines.push(`${key} = "${escStr(value)}";`);
}

function num(lines: string[], key: string, value: number | undefined): void {
	if (value !== undefined) lines.push(`${key} = ${value};`);
}

function bool(lines: string[], key: string, value: boolean | undefined): void {
	if (value !== undefined) lines.push(`${key} = ${value ? 1 : 0};`);
}

function strArr(
	lines: string[],
	key: string,
	value: string[] | undefined,
): void {
	if (value?.length) {
		const items = value.map((v) => `"${escStr(v)}"`).join(", ");
		lines.push(`${key}[] = {${items}};`);
	}
}

function numArr(
	lines: string[],
	key: string,
	value: number[] | undefined,
): void {
	if (value?.length) {
		lines.push(`${key}[] = {${value.join(", ")}};`);
	}
}
