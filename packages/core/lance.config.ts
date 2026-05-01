import type { LanceConfig } from "./src/lance-config";

export default {
  name: "@lance/core",
  version: "0.0.3",
  type: "library",
  exports: [
    "./index.ts",
    "./globals.d.ts",
    "./types/cfg-magazines.d.ts",
    "./types/cfg-runtime.d.ts",
    "./types/cfg-weapons-items.d.ts",
    "./types/cfg-weapons.d.ts",
    "./types/config-file.d.ts",
  ],
  include: [],
  dependencies: {},
} satisfies LanceConfig;
