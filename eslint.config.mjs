import { createLanceLocalityConfig } from "./packages/eslint/dist/index.js";

export default [
	createLanceLocalityConfig({
		tsconfigRootDir: new URL("./playground", import.meta.url).pathname,
		project: "./tsconfig.json",
		files: ["playground/src/**/*.ts"],
	}),
];
