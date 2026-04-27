import { describe, expect, test } from "bun:test";
import type { SqfStatement, SqfTryCatchStatement } from "../../src/ir/nodes";
import { wrapEntryStatements } from "../../src/normalize/normalize-entry-point";

describe("normalize-entry-point: auto-wrap (§14.6.1)", () => {
  test("non-empty statements get wrapped in try/catch → LANCE_fnc_handleError", () => {
    const original: SqfStatement[] = [
      {
        kind: "ExpressionStatement",
        expression: {
          kind: "CallExpression",
          callee: { kind: "Identifier", text: "_doStuff" },
          args: [],
        },
      },
    ];

    const wrapped = wrapEntryStatements(original);
    expect(wrapped.length).toBe(1);

    const tryCatch = wrapped[0] as SqfTryCatchStatement;
    expect(tryCatch.kind).toBe("TryCatchStatement");
    expect(tryCatch.tryBody).toBe(original);

    // catch body calls LANCE_fnc_handleError with [_exception, "<mission init>"]
    expect(tryCatch.catchBody.length).toBe(1);
    const catchCall = tryCatch.catchBody[0]!;
    expect(catchCall.kind).toBe("ExpressionStatement");
    if (catchCall.kind !== "ExpressionStatement") return;
    expect(catchCall.expression.kind).toBe("CallExpression");
    if (catchCall.expression.kind !== "CallExpression") return;

    const callee = catchCall.expression.callee;
    expect(callee.kind).toBe("Identifier");
    if (callee.kind === "Identifier") {
      expect(callee.text).toBe("LANCE_fnc_handleError");
    }

    expect(catchCall.expression.args.length).toBe(2);
    const sourceArg = catchCall.expression.args[1]!;
    expect(sourceArg.kind).toBe("Literal");
    if (sourceArg.kind === "Literal") {
      expect(sourceArg.text).toBe('"<mission init>"');
    }
  });

  test("empty entry statements pass through unchanged (no wrapper for libraries)", () => {
    expect(wrapEntryStatements([])).toEqual([]);
  });
});
