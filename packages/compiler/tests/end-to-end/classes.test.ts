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

function compile(source: string): { sqf: string; functionBodies: string; diagnostics: DiagnosticBag } {
  const project = new Project({ useInMemoryFileSystem: true });
  project.createSourceFile('/node_modules/@lance/core/index.d.ts', 'declare module "@lance/core" {}');
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
    { ...defaultCompilerOptions, entryFilePaths: ["/test.ts"], tsConfigFilePath: "tsconfig.json", tag: "LANCE" },
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
  const fnBodies = outputs
    .filter((f) => f.path.includes("functions/"))
    .map((f) => f.content)
    .join("\n");

  return {
    sqf: entry?.content ?? "",
    functionBodies: fnBodies,
    diagnostics,
  };
}

describe("class lowering to hashmap model", () => {
  test("constructor + instance methods + new + method call", () => {
    const { sqf, functionBodies, diagnostics } = compile(`
      class Vehicle {
        private _speed: number;
        private _name: string;
        constructor(name: string, speed: number) {
          this._speed = speed;
          this._name = name;
        }
        accelerate(amount: number): void {
          this._speed = this._speed + amount;
        }
        getName(): string {
          return this._name;
        }
      }

      const car = new Vehicle("Humvee", 0);
      car.accelerate(10);
      const n = car.getName();
    `);

    expect(functionBodies).toContain("LANCE_Vehicle_new");
    expect(functionBodies).toContain('createHashMap');
    expect(functionBodies).toContain('_self set ["_speed", _speed]');
    expect(functionBodies).toContain('_self set ["_name", _name]');
    expect(functionBodies).toContain('LANCE_Vehicle_accelerate');
    expect(functionBodies).toContain('_self get "_speed"');
    expect(sqf).toContain('private _car = ["Humvee", 0] call LANCE_Vehicle_new;');
    expect(sqf).toContain('[_car, 10] call LANCE_Vehicle_accelerate;');
    expect(sqf).toContain('private _n = _car call LANCE_Vehicle_getName;');
    expect(diagnostics.toArray()).toEqual([]);
  });

  test("inheritance ctor chain + instanceof lowering", () => {
    const { sqf, functionBodies, diagnostics } = compile(`
      class Vehicle {
        constructor(public _name: string, public _speed: number) {}
      }
      class Tank extends Vehicle {
        private _turretAngle: number;
        constructor(name: string, speed: number, turretAngle: number) {
          super(name, speed);
          this._turretAngle = turretAngle;
        }
      }
      class M1_Abrams extends Tank {
        private _armorType: string;
        constructor(name: string, speed: number, turretAngle: number, armorType: string) {
          super(name, speed, turretAngle);
          this._armorType = armorType;
        }
      }
      const tank = new M1_Abrams("A", 10, 20, "DU");
      const isVehicle = tank instanceof Vehicle;
    `);

    expect(functionBodies).toContain('LANCE_Tank_new');
    expect(functionBodies).toContain('call LANCE_Vehicle_new');
    expect(functionBodies).toContain('LANCE_M1_Abrams_new');
    expect(functionBodies).toContain('call LANCE_Tank_new');
    expect(functionBodies).toContain('_self set ["_types", ["M1_Abrams", "Tank", "Vehicle"]]');
    expect(sqf).toContain('private _isVehicle = _tank get "_types" find "Vehicle" != -1;');
    expect(diagnostics.toArray()).toEqual([]);
  });
});
