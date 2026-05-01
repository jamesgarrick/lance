export default {
  name: "@lance/core",
  version: "0.0.1",
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
} satisfies {
  name: string;
  version: string;
  type: "mission" | "library";
  exports?: string | string[];
  include?: string[];
  dependencies?: Record<string, string>;
};
