import { join } from "node:path";
import type { LanceConfig } from "./schema";

export const CONFIG_FILENAME = "lance.config.toml";

export async function loadLanceConfig(projectRoot: string): Promise<LanceConfig> {
  const configPath = join(projectRoot, CONFIG_FILENAME);
  const file = Bun.file(configPath);

  if (!(await file.exists())) {
    throw new Error(
      `Lance config not found at ${configPath}. Run 'lance init' to create one.`,
    );
  }

  const text = await file.text();
  const raw = Bun.TOML.parse(text) as Record<string, unknown>;

  assertSection(raw, "project", configPath);
  assertSection(raw, "build", configPath);

  const project = raw.project as Record<string, unknown>;
  if (typeof project.name !== "string") {
    throw new Error(`Invalid config at ${configPath}: [project].name is required`);
  }
  if (project.type !== "mission" && project.type !== "library") {
    throw new Error(
      `Invalid config at ${configPath}: [project].type must be "mission" or "library"`,
    );
  }

  const build = raw.build as Record<string, unknown>;
  if (typeof build.entrypoint !== "string") {
    throw new Error(
      `Invalid config at ${configPath}: [build].entrypoint is required and must be a string`,
    );
  }

  return raw as unknown as LanceConfig;
}

function assertSection(
  raw: Record<string, unknown>,
  key: string,
  configPath: string,
): void {
  if (!raw[key] || typeof raw[key] !== "object") {
    throw new Error(
      `Invalid config at ${configPath}: missing [${key}] section`,
    );
  }
}
