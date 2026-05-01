import { describe, expect, test } from "bun:test";
import { Project } from "ts-morph";
import { DiagnosticBag } from "../../src/compiler/diagnostics";
import { lowerBinaryOperator } from "../../src/lowering/lower-operators";

function makeNode() {
	// The operator lowering only needs a node for source-span info on diagnostics —
	// any node from a small in-memory project works.
	const project = new Project({ useInMemoryFileSystem: true });
	const sourceFile = project.createSourceFile("scratch.ts", "const x = 1;");
	return sourceFile.getStatements()[0]!;
}

describe("lower-operators: TS → SQF binary operator mapping", () => {
	test("=== lowers to isEqualTo", () => {
		const diagnostics = new DiagnosticBag();
		expect(lowerBinaryOperator("===", makeNode(), diagnostics)).toBe(
			"isEqualTo",
		);
		expect(diagnostics.toArray()).toEqual([]);
	});

	test("!== lowers to isNotEqualTo", () => {
		const diagnostics = new DiagnosticBag();
		expect(lowerBinaryOperator("!==", makeNode(), diagnostics)).toBe(
			"isNotEqualTo",
		);
		expect(diagnostics.toArray()).toEqual([]);
	});

	test("== is rejected with LANCE_NON_STRICT_EQUALITY", () => {
		const diagnostics = new DiagnosticBag();
		lowerBinaryOperator("==", makeNode(), diagnostics);

		const reported = diagnostics.toArray();
		expect(reported.length).toBe(1);
		expect(reported[0]!.code).toBe("LANCE_NON_STRICT_EQUALITY");
		expect(reported[0]!.severity).toBe("error");
	});

	test("!= is rejected with LANCE_NON_STRICT_EQUALITY", () => {
		const diagnostics = new DiagnosticBag();
		lowerBinaryOperator("!=", makeNode(), diagnostics);

		const reported = diagnostics.toArray();
		expect(reported.length).toBe(1);
		expect(reported[0]!.code).toBe("LANCE_NON_STRICT_EQUALITY");
	});

	test("% lowers to mod", () => {
		const diagnostics = new DiagnosticBag();
		expect(lowerBinaryOperator("%", makeNode(), diagnostics)).toBe("mod");
	});

	test("direct-passthrough operators stay the same", () => {
		const diagnostics = new DiagnosticBag();
		for (const op of ["+", "-", "*", "/", "<", "<=", ">", ">=", "&&", "||"]) {
			expect(lowerBinaryOperator(op, makeNode(), diagnostics)).toBe(op);
		}
		expect(diagnostics.toArray()).toEqual([]);
	});
});
