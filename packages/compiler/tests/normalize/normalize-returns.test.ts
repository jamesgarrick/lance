import { describe, expect, test } from "bun:test";
import { DiagnosticBag } from "../../src/compiler/diagnostics";
import type {
  SqfFunctionFile,
  SqfIfStatement,
  SqfProgram,
  SqfReturnStatement,
  SqfStatement,
} from "../../src/ir/nodes";
import { normalizeSqfProgram } from "../../src/normalize/normalize-program";

function makeProgram(body: readonly SqfStatement[]): SqfProgram {
  const fn: SqfFunctionFile = {
    kind: "FunctionFile",
    sqfName: "TST_fnc_test",
    outputPath: "functions/fn_test.sqf",
    category: null,
    functionName: "test",
    tag: "TST",
    parameters: [],
    body,
  };
  return {
    kind: "Program",
    entryFilePath: "init.ts",
    entryStatements: [],
    functionFiles: [fn],
  };
}

function normalizedBody(body: readonly SqfStatement[]): {
  body: readonly SqfStatement[];
  diagnostics: DiagnosticBag;
} {
  const diagnostics = new DiagnosticBag();
  const result = normalizeSqfProgram(makeProgram(body), diagnostics);
  return { body: result.functionFiles[0]!.body, diagnostics };
}

describe("normalize: function return statements", () => {
  test("trailing `return X` becomes a TrailingExpressionStatement (no `return` keyword)", () => {
    const ret: SqfReturnStatement = {
      kind: "ReturnStatement",
      expression: { kind: "Identifier", text: "_x" },
    };
    const { body, diagnostics } = normalizedBody([ret]);

    expect(body).toEqual([
      {
        kind: "TrailingExpressionStatement",
        expression: { kind: "Identifier", text: "_x" },
      },
    ]);
    expect(diagnostics.toArray()).toEqual([]);
  });

  test("trailing bare `return` is dropped entirely", () => {
    const ret: SqfReturnStatement = { kind: "ReturnStatement" };
    const { body, diagnostics } = normalizedBody([ret]);

    expect(body).toEqual([]);
    expect(diagnostics.toArray()).toEqual([]);
  });

  test("`if (cond) { return X; }` collapses to IfExitWithStatement", () => {
    const ifStmt: SqfIfStatement = {
      kind: "IfStatement",
      condition: { kind: "Identifier", text: "_cond" },
      thenStatements: [
        {
          kind: "ReturnStatement",
          expression: { kind: "Literal", text: "42" },
        },
      ],
      elseStatements: [],
    };
    const { body, diagnostics } = normalizedBody([ifStmt]);

    expect(body).toEqual([
      {
        kind: "IfExitWithStatement",
        condition: { kind: "Identifier", text: "_cond" },
        value: { kind: "Literal", text: "42" },
      },
    ]);
    expect(diagnostics.toArray()).toEqual([]);
  });

  test("`if (cond) { return; }` (no value) collapses to IfExitWithStatement with no value", () => {
    const ifStmt: SqfIfStatement = {
      kind: "IfStatement",
      condition: { kind: "Identifier", text: "_cond" },
      thenStatements: [{ kind: "ReturnStatement" }],
      elseStatements: [],
    };
    const { body } = normalizedBody([ifStmt]);

    expect(body).toEqual([
      {
        kind: "IfExitWithStatement",
        condition: { kind: "Identifier", text: "_cond" },
        value: undefined,
      },
    ]);
  });

  test("multiple guarded early returns followed by trailing return all normalize", () => {
    const ifReturn = (lit: string): SqfIfStatement => ({
      kind: "IfStatement",
      condition: { kind: "Identifier", text: "_c" },
      thenStatements: [
        {
          kind: "ReturnStatement",
          expression: { kind: "Literal", text: lit },
        },
      ],
      elseStatements: [],
    });

    const { body, diagnostics } = normalizedBody([
      ifReturn(`"dead"`),
      ifReturn(`"wounded"`),
      {
        kind: "ReturnStatement",
        expression: { kind: "Literal", text: `"healthy"` },
      },
    ]);

    expect(body.length).toBe(3);
    expect(body[0]!.kind).toBe("IfExitWithStatement");
    expect(body[1]!.kind).toBe("IfExitWithStatement");
    expect(body[2]!.kind).toBe("TrailingExpressionStatement");
    expect(diagnostics.toArray()).toEqual([]);
  });

  test("nested return inside an `if` with else surfaces a diagnostic", () => {
    const ifStmt: SqfIfStatement = {
      kind: "IfStatement",
      condition: { kind: "Identifier", text: "_c" },
      thenStatements: [
        {
          kind: "ReturnStatement",
          expression: { kind: "Literal", text: "1" },
        },
      ],
      elseStatements: [
        {
          kind: "ReturnStatement",
          expression: { kind: "Literal", text: "2" },
        },
      ],
    };
    const { diagnostics } = normalizedBody([ifStmt]);

    const codes = diagnostics.toArray().map((d) => d.code);
    expect(codes).toContain("LANCE_NESTED_RETURN_UNSUPPORTED");
  });

  test("mid-body `return` (not at end) surfaces a diagnostic", () => {
    const { diagnostics } = normalizedBody([
      {
        kind: "ReturnStatement",
        expression: { kind: "Literal", text: "1" },
      },
      {
        kind: "ExpressionStatement",
        expression: { kind: "Identifier", text: "_unreachable" },
      },
    ]);

    const codes = diagnostics.toArray().map((d) => d.code);
    expect(codes).toContain("LANCE_NESTED_RETURN_UNSUPPORTED");
  });
});
