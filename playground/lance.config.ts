import type { LanceConfig } from "@lance/core";

export default {
  name: "@local/playground",
  version: "0.0.1",
  type: "mission",
  exports: "./src/init.ts",
  include: [],
  dependencies: {
    "@lance/core": "~0.0.7",
    "@lance/eslint": "^0.0.1",
    "@lance/std": "~0.0.2",
  },
} satisfies LanceConfig;
