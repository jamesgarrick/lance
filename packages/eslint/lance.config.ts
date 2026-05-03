import type { LanceConfig } from "@lance/core";

export default {
  name: "@lance/eslint",
  version: "0.0.1",
  type: "library",
  exports: "./index.ts",
  include: [],
  dependencies: {
    "@lance/core": "~0.0.7",
  },
} satisfies LanceConfig;
