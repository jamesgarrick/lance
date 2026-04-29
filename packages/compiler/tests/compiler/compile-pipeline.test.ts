import { afterEach, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { compileProject, formatCompilerDiagnostic } from "../../src/compiler";

const tempDirs: string[] = [];

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

describe("compile pipeline", () => {
  test("stops after semantic phase when semantic context loading fails", async () => {
    const dir = await createProjectDir({
      "tsconfig.json": JSON.stringify({
        compilerOptions: {
          target: "ES2020",
          module: "ESNext",
        },
        include: ["src/**/*.ts"],
      }),
      "src/init.ts": "const value = 1;",
    });

    const result = await compileProject({
      entryFilePaths: [join(dir, "src/init.ts")],
      tsConfigFilePath: join(dir, "tsconfig.json"),
      typesPackageRoot: join(dir, "missing-types"),
    });

    expect(result.outputFiles).toEqual([]);
    expect(result.diagnostics.some((diagnostic) => diagnostic.code === "LANCE_SEMANTIC_INTERNAL")).toBe(true);
    expect(result.phases.map((phase) => [phase.phase, phase.status])).toEqual([
      ["load", "completed"],
      ["semantic", "failed"],
      ["lowering", "skipped"],
      ["normalize", "skipped"],
      ["emit", "skipped"],
    ]);
  });

  test("stops after lowering when lowering reports hard errors", async () => {
    const dir = await createProjectDir({
      "tsconfig.json": JSON.stringify({
        compilerOptions: {
          target: "ES2020",
          module: "ESNext",
        },
        include: ["src/**/*.ts"],
      }),
      "src/init.ts": "const same = 1 == 1;",
    });

    const result = await compileProject({
      entryFilePaths: [join(dir, "src/init.ts")],
      tsConfigFilePath: join(dir, "tsconfig.json"),
      typesPackageRoot: join(process.cwd(), "packages/core/data"),
    });

    expect(result.outputFiles).toEqual([]);
    expect(result.diagnostics.some((diagnostic) => diagnostic.code === "LANCE_NON_STRICT_EQUALITY")).toBe(true);
    expect(result.phases.map((phase) => [phase.phase, phase.status])).toEqual([
      ["load", "completed"],
      ["semantic", "completed"],
      ["lowering", "failed"],
      ["normalize", "skipped"],
      ["emit", "skipped"],
    ]);
  });

  test("formats diagnostics with phase, location, and hint", () => {
    expect(
      formatCompilerDiagnostic({
        code: "LANCE_UNSUPPORTED_EXPRESSION",
        severity: "warning",
        phase: "lowering",
        message: "Unsupported expression kind: YieldExpression",
        span: { filePath: "/tmp/test.ts", line: 4, column: 2 },
        hint: "rewrite this as a supported control-flow form",
      }),
    ).toBe(
      "WARNING LANCE_UNSUPPORTED_EXPRESSION [lowering] /tmp/test.ts:4:2\n  Unsupported expression kind: YieldExpression\n  Hint: rewrite this as a supported control-flow form",
    );
  });
});

async function createProjectDir(files: Record<string, string>): Promise<string> {
  const dir = await mkdtemp(join(tmpdir(), "lance-compiler-"));
  tempDirs.push(dir);

  await Promise.all(
    Object.entries(files).map(async ([relativePath, content]) => {
      const filePath = join(dir, relativePath);
      await mkdir(dirname(filePath), { recursive: true });
      await Bun.write(filePath, content);
    }),
  );

  await writeFile(join(dir, "package.json"), JSON.stringify({ type: "module" }));
  return dir;
}
