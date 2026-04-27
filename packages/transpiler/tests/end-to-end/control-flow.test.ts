/**
 * End-to-end tests: TS source → emitted SQF, asserting the new control-flow
 * constructs from spec §3 lower correctly.
 *
 * These tests run the full pipeline (lowering → normalization → emit) on
 * in-memory TS sources and check the SQF output.
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

interface CompileOptions {
  source: string;
  asEntry?: boolean;
}

function compile({ source, asEntry = true }: CompileOptions): {
  sqf: string;
  diagnostics: DiagnosticBag;
} {
  const project = new Project({ useInMemoryFileSystem: true });
  const sourceFile = project.createSourceFile("/test.ts", source);

  const diagnostics = new DiagnosticBag();
  const registry: FunctionRegistry = new Map();
  const semanticContext: SemanticContext = {
    cfgWeapons: {},
    cfgWeaponsItems: {},
    cfgMagazines: {},
  };

  const result = lowerSourceFile(
    sourceFile,
    asEntry,
    diagnostics,
    defaultCompilerOptions,
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

describe("end-to-end: ternary (§3.1.4)", () => {
  test("simple ternary lowers to if-then-else value form", () => {
    const { sqf, diagnostics } = compile({
      source: `const x = (1 < 2) ? "a" : "b";`,
    });
    expect(sqf).toContain(`if (1 < 2) then { "a" } else { "b" }`);
    expect(diagnostics.toArray()).toEqual([]);
  });
});

describe("end-to-end: numeric for (§3.3.1–§3.3.3)", () => {
  test("`for (let i = 0; i < 10; i++)` lowers to from/to with -1 adjustment", () => {
    const { sqf, diagnostics } = compile({
      source: `for (let i = 0; i < 10; i++) {}`,
    });
    expect(sqf).toContain(`for "_i" from 0 to 10 - 1 do {`);
    expect(diagnostics.toArray()).toEqual([]);
  });

  test("`for (let i = 0; i <= 10; i++)` keeps the upper bound", () => {
    const { sqf, diagnostics } = compile({
      source: `for (let i = 0; i <= 10; i++) {}`,
    });
    expect(sqf).toContain(`for "_i" from 0 to 10 do {`);
    expect(diagnostics.toArray()).toEqual([]);
  });

  test("downward `for (let i = 9; i >= 0; i--)` lowers with step -1", () => {
    const { sqf, diagnostics } = compile({
      source: `for (let i = 9; i >= 0; i--) {}`,
    });
    expect(sqf).toContain(`for "_i" from 9 to 0 step -1 do {`);
    expect(diagnostics.toArray()).toEqual([]);
  });

  test("non-canonical for surfaces a diagnostic", () => {
    const { diagnostics } = compile({
      source: `for (let p = 0; p !== 5; p = p + 2) {}`,
    });
    const codes = diagnostics.toArray().map((d) => d.code);
    expect(codes).toContain("LANCE_UNSUPPORTED_STATEMENT");
  });
});

describe("end-to-end: for-of (§3.3.5)", () => {
  test("for-of over an iterable emits forEach with rebind", () => {
    const { sqf } = compile({
      source: `for (const u of units) { /* body */ }`,
    });
    expect(sqf).toContain(`} forEach units;`);
    expect(sqf).toContain(`private _u = _x;`);
  });

  test("destructuring in for-of surfaces a diagnostic", () => {
    const { diagnostics } = compile({
      source: `for (const [i, x] of arr.entries()) {}`,
    });
    const codes = diagnostics.toArray().map((d) => d.code);
    expect(codes).toContain("LANCE_UNSUPPORTED_STATEMENT");
  });
});

describe("end-to-end: switch (§3.4)", () => {
  test("basic switch with break per case", () => {
    const { sqf, diagnostics } = compile({
      source: `
        switch (state) {
          case "a": doA(); break;
          case "b": doB(); break;
          default: doDefault();
        }
      `,
    });
    expect(sqf).toContain(`switch (state) do {`);
    expect(sqf).toContain(`case "a": {`);
    expect(sqf).toContain(`case "b": {`);
    expect(sqf).toContain(`default {`);
    expect(diagnostics.toArray()).toEqual([]);
  });

  test("shared empty cases (fallthrough via empty body) collapse to multi-label form", () => {
    const { sqf, diagnostics } = compile({
      source: `
        switch (rank) {
          case "PRIVATE":
          case "CORPORAL":
            doEnlisted();
            break;
        }
      `,
    });
    // Expect the two labels in `case A; case B: { … }` form.
    expect(sqf).toContain(`case "PRIVATE";`);
    expect(sqf).toContain(`case "CORPORAL": {`);
    expect(diagnostics.toArray()).toEqual([]);
  });

  test("executable fallthrough surfaces a diagnostic", () => {
    const { diagnostics } = compile({
      source: `
        switch (s) {
          case "a": doA();
          case "b": doB(); break;
        }
      `,
    });
    const codes = diagnostics.toArray().map((d) => d.code);
    expect(codes).toContain("LANCE_FALLTHROUGH_UNSUPPORTED");
  });
});

describe("end-to-end: throw (§3.5.2 / §14.4)", () => {
  test("`throw new NotImplementedError(...)` lowers to structured HashMap", () => {
    const { sqf, diagnostics } = compile({
      source: `throw new NotImplementedError("WIP");`,
    });
    expect(sqf).toContain(`throw createHashMapFromArray`);
    expect(sqf).toContain(`"__class", "NotImplementedError"`);
    expect(sqf).toContain(`"__hierarchy", ["NotImplementedError", "Error"]`);
    expect(sqf).toContain(`"message", "WIP"`);
    expect(sqf).toContain(`"source", _fnc_scriptName`);
    expect(diagnostics.toArray()).toEqual([]);
  });

  test("re-throw of caught identifier passes through", () => {
    const { sqf, diagnostics } = compile({
      source: `throw e;`,
    });
    expect(sqf).toContain(`throw e;`);
    expect(diagnostics.toArray()).toEqual([]);
  });

  test("`throw \"bare string\"` is rejected with LANCE_NON_ERROR_THROW", () => {
    const { diagnostics } = compile({
      source: `throw "oops";`,
    });
    const codes = diagnostics.toArray().map((d) => d.code);
    expect(codes).toContain("LANCE_NON_ERROR_THROW");
  });

  test("unknown error class is rejected", () => {
    const { diagnostics } = compile({
      source: `throw new MyCustomError("oops");`,
    });
    const codes = diagnostics.toArray().map((d) => d.code);
    expect(codes).toContain("LANCE_NON_ERROR_THROW");
  });
});

describe("end-to-end: prefix unary (§5.3.3)", () => {
  test("`!cond` lowers to !(cond)", () => {
    const { sqf } = compile({
      source: `const x = !ready;`,
    });
    expect(sqf).toContain(`!(ready)`);
  });

  test("`-x` lowers to -(x)", () => {
    const { sqf } = compile({
      source: `const y = -value;`,
    });
    expect(sqf).toContain(`-(value)`);
  });
});
