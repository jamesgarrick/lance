export default {
  name: "@lance/std",
  version: "0.0.1",
  type: "library",
  exports: ["./src/index.ts","./globals.d.ts"],
  include: [],
  dependencies: {
    "@lance/core": "^0.0.1",
  },
} satisfies {
  name: string;
  version: string;
  type: "mission" | "library";
  exports?: string | string[];
  include?: string[];
  dependencies?: Record<string, string>;
};
