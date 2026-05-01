import type { LanceConfig } from "@lance/core";

export default {
  name: "@lance/std",
  version: "0.0.2",
  type: "library",
  exports: ["./src/index.ts", "./globals.d.ts"],
  include: [],
  dependencies: {
    "@lance/core": "~0.0.5",
  },
} satisfies LanceConfig;
