import tsParser from "@typescript-eslint/parser";
import lanceLocality from "./dist-tools/eslint-rules/no-server-local-arguments.js";

export default [
	{
		files: ["index.ts"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			"lance-locality": lanceLocality,
		},
		rules: {
			"lance-locality/no-server-local-arguments": "error",
		},
	},
];
