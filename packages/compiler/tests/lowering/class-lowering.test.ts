import { describe, expect, test } from "bun:test";
import { Project } from "ts-morph";
import {
	classifyClassLoweringKind,
	getPrimitiveWrapperBackingFieldName,
} from "../../src/semantic/class-lowering";

function getClass(source: string, className: string) {
	const project = new Project({ useInMemoryFileSystem: true });

	project.createSourceFile(
		"/node_modules/@lance/core/types/string.d.ts",
		`declare module "@lance/core/types/string" {
      export interface String {}
    }`,
	);
	project.createSourceFile(
		"/node_modules/@lance/core/types/number.d.ts",
		`declare module "@lance/core/types/number" {
      export interface Number {}
    }`,
	);
	project.createSourceFile(
		"/node_modules/@lance/core/types/array.d.ts",
		`declare module "@lance/core/types/array" {
      export interface Array {}
    }`,
	);
	project.createSourceFile(
		"/node_modules/some-other-lib/types/string.d.ts",
		`declare module "some-other-lib/types/string" {
      export interface String {}
    }`,
	);

	const file = project.createSourceFile("/test.ts", source);
	const cls = file.getClass(className);
	if (!cls) throw new Error(`class not found: ${className}`);
	return cls;
}

describe("class-lowering classifier", () => {
	test("`implements` @lance/core primitive interface → primitive-wrapper", () => {
		const cls = getClass(
			`
      import type { String as IString } from "@lance/core/types/string";
      class CString implements IString {
        private _string!: string;
      }
      `,
			"CString",
		);

		expect(classifyClassLoweringKind(cls)).toBe("primitive-wrapper");
		expect(getPrimitiveWrapperBackingFieldName(cls)).toBe("_string");
	});

	test("single private field without @lance/core interface stays hashmap-class", () => {
		const cls = getClass(
			`
      class PlayerId {
        private _id!: string;
      }
      `,
			"PlayerId",
		);

		expect(classifyClassLoweringKind(cls)).toBe("hashmap-class");
		expect(getPrimitiveWrapperBackingFieldName(cls)).toBeUndefined();
	});

	test("same interface name from non-@lance/core package does not count", () => {
		const cls = getClass(
			`
      import type { String as IString } from "some-other-lib/types/string";
      class MyString implements IString {
        private _value!: string;
      }
      `,
			"MyString",
		);

		expect(classifyClassLoweringKind(cls)).toBe("hashmap-class");
		expect(getPrimitiveWrapperBackingFieldName(cls)).toBeUndefined();
	});
});
