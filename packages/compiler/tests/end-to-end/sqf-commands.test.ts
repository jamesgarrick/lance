/**
 * End-to-end tests: free SQF command functions from the types package lower
 * to the correct nular/unary/binary SQF command forms.
 *
 * Unary (1-arg):  `goggles(unit)`         → `goggles _unit`
 * Binary (2-arg): `addVest(unit, cls)`     → `_unit addVest "vest_cls"`
 */

import { describe, expect, test } from "bun:test";
import { Project } from "ts-morph";
import { DiagnosticBag } from "../../src/compiler/diagnostics";
import { emitSqfProgram } from "../../src/emit/emit-sqf";
import type { SqfProgram } from "../../src/ir/nodes";
import { lowerSourceFile } from "../../src/lowering/lower-source-file";
import { normalizeSqfProgram } from "../../src/normalize/normalize-program";
import { defaultCompilerOptions } from "../../src/compiler/options";
import type { FunctionRegistry } from "../../src/compiler/project";
import type { SemanticContext } from "../../src/semantic/context";

function compile(source: string): { sqf: string; diagnostics: DiagnosticBag } {
	const project = new Project({ useInMemoryFileSystem: true });
	project.createSourceFile(
		"/node_modules/@lance/core/index.d.ts",
		`declare module "@lance/core" {
      export const player: unknown;
      export function goggles(unit: unknown): string;
      export function vest(unit: unknown): string;
      export function primaryWeapon(unit: unknown): string;
      export function handgunWeapon(unit: unknown): string;
      export function addVest(unit: unknown, cls: string): void;
      export function linkItem(unit: unknown, item: string): void;
      export function addWeaponCargoGlobal(unit: unknown, weaponClass: string, count: number): void;
    }`,
	);
	const sourceFile = project.createSourceFile("/test.ts", source);

	const diagnostics = new DiagnosticBag();
	const registry: FunctionRegistry = new Map();
	const semanticContext: SemanticContext = {
		cfgRoots: { cfgWeapons: {}, cfgWeaponsItems: {}, cfgMagazines: {} },
	};

	const result = lowerSourceFile(
		sourceFile,
		true,
		diagnostics,
		{
			...defaultCompilerOptions,
			entryFilePaths: ["/test.ts"],
			tsConfigFilePath: "tsconfig.json",
		},
		semanticContext,
		registry,
	);

	const program: SqfProgram = {
		kind: "Program",
		entryFilePath: "/test.ts",
		entryStatements: result.entryStatements,
		functionFiles: result.functionFiles,
	};

	const normalized = normalizeSqfProgram(program, diagnostics);
	const outputs = emitSqfProgram(normalized, diagnostics);
	const entry = outputs.find((f) => f.path.endsWith("test.sqf"));

	return { sqf: entry?.content ?? "", diagnostics };
}

describe("SQF unary commands (1-arg free functions)", () => {
	test("goggles(player) → goggles player", () => {
		const { sqf, diagnostics } = compile(`
      import { player, goggles } from "@lance/core";
      const g = goggles(player);
    `);
		expect(sqf).toContain("goggles player");
		expect(diagnostics.toArray()).toEqual([]);
	});

	test("result of unary command assigned to local variable", () => {
		const { sqf, diagnostics } = compile(`
      import { player, vest } from "@lance/core";
      const unit = player;
      const v = vest(unit);
    `);
		expect(sqf).toContain("private _v = vest _unit;");
		expect(diagnostics.toArray()).toEqual([]);
	});
});

describe("SQF binary commands (2-arg free functions)", () => {
	test("addVest(player, cls) → player addVest cls", () => {
		const { sqf, diagnostics } = compile(`
      import { player, addVest } from "@lance/core";
      addVest(player, "V_PlateCarrier1_rgr_F");
    `);
		expect(sqf).toContain(`player addVest "V_PlateCarrier1_rgr_F"`);
		expect(diagnostics.toArray()).toEqual([]);
	});

	test("addVest(unit, cls) — local var receiver → _unit addVest cls", () => {
		const { sqf, diagnostics } = compile(`
      import { player, addVest } from "@lance/core";
      const unit = player;
      addVest(unit, "V_PlateCarrier1_rgr_F");
    `);
		expect(sqf).toContain(`_unit addVest "V_PlateCarrier1_rgr_F"`);
		expect(diagnostics.toArray()).toEqual([]);
	});

	test("linkItem(unit, item) → _unit linkItem _item", () => {
		const { sqf, diagnostics } = compile(`
      import { player, linkItem } from "@lance/core";
      const unit = player;
      const item = "NVGoggles";
      linkItem(unit, item);
    `);
		expect(sqf).toContain("_unit linkItem _item");
		expect(diagnostics.toArray()).toEqual([]);
	});
});

describe("SQF binary commands with array right-operand (3+ arg free functions)", () => {
	test("addWeaponCargoGlobal(unit, weapon, count) → unit addWeaponCargoGlobal [weapon, count]", () => {
		const { sqf, diagnostics } = compile(`
      import { player, addWeaponCargoGlobal } from "@lance/core";
      addWeaponCargoGlobal(player, "arifle_AK12_F", 5);
    `);
		expect(sqf).toContain(`player addWeaponCargoGlobal ["arifle_AK12_F", 5]`);
		expect(diagnostics.toArray()).toEqual([]);
	});

	test("3-arg command with local receiver → _unit addWeaponCargoGlobal [weapon, count]", () => {
		const { sqf, diagnostics } = compile(`
      import { player, addWeaponCargoGlobal } from "@lance/core";
      const vehicle = player;
      addWeaponCargoGlobal(vehicle, "arifle_AK12_F", 2);
    `);
		expect(sqf).toContain(`_vehicle addWeaponCargoGlobal ["arifle_AK12_F", 2]`);
		expect(diagnostics.toArray()).toEqual([]);
	});
});

describe("SQF commands with player (nular import as receiver)", () => {
	test("goggles(player) → goggles player", () => {
		const { sqf, diagnostics } = compile(`
      import { player, goggles } from "@lance/core";
      const g = goggles(player);
    `);
		expect(sqf).toContain("goggles player");
		expect(diagnostics.toArray()).toEqual([]);
	});

	test("addVest(player, cls) → player addVest cls", () => {
		const { sqf, diagnostics } = compile(`
      import { player, addVest } from "@lance/core";
      addVest(player, "V_PlateCarrier1_rgr_F");
    `);
		expect(sqf).toContain(`player addVest "V_PlateCarrier1_rgr_F"`);
		expect(diagnostics.toArray()).toEqual([]);
	});
});

describe("aliased imports", () => {
	test("import { goggles as getGoggles } from '/core' still lowers to goggles command", () => {
		const { sqf, diagnostics } = compile(`
      import { goggles as getGoggles, player } from "@lance/core";
      const g = getGoggles(player);
    `);
		expect(sqf).toContain("goggles player");
		expect(diagnostics.toArray()).toEqual([]);
	});
});
