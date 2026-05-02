import tsParser from "@typescript-eslint/parser";
import { noServerLocalArguments } from "./src/rules/no-server-local-arguments.js";

export const rules = {
	"no-server-local-arguments": noServerLocalArguments,
} as const;

export const plugin = {
	meta: {
		name: "@lance/eslint",
		version: "0.0.1",
	},
	rules,
} as const;

export interface LanceLocalityConfigOptions {
	readonly files?: readonly string[];
	readonly tsconfigRootDir: string;
	readonly project?: string;
}

export function createLanceLocalityConfig(
	options: LanceLocalityConfigOptions,
): {
	files: readonly string[];
	languageOptions: {
		parser: typeof tsParser;
		parserOptions: {
			project: string;
			tsconfigRootDir: string;
		};
	};
	plugins: {
		"lance-locality": typeof plugin;
	};
	rules: {
		"lance-locality/no-server-local-arguments": "error";
	};
} {
	return {
		files: options.files ?? ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: options.project ?? "./tsconfig.json",
				tsconfigRootDir: options.tsconfigRootDir,
			},
		},
		plugins: {
			"lance-locality": plugin,
		},
		rules: {
			"lance-locality/no-server-local-arguments": "error",
		},
	};
}

export default plugin;
