import type * as ts from "typescript/lib/tsserverlibrary";
import * as path from "path";
import * as fs from "fs";

function init(modules: { typescript: typeof import("typescript/lib/tsserverlibrary") }) {
  function create(info: ts.server.PluginCreateInfo) {
    const proxy: ts.LanguageService = Object.create(null);
    for (const k of Object.keys(info.languageService) as Array<keyof ts.LanguageService>) {
      const x = info.languageService[k]!;
      // @ts-ignore — generic proxy pattern
      proxy[k] = (...args: any[]) => (x as Function).apply(info.languageService, args);
    }

    proxy.getCompletionsAtPosition = (fileName, position, options) => {
      const prior = info.languageService.getCompletionsAtPosition(fileName, position, options);
      if (!prior) return undefined;

      const projectDir = info.project.getCurrentDirectory();

      prior.entries = prior.entries.filter((entry) => {
        if (!entry.source) return true;
        if (entry.source.startsWith(".")) return true;
        return isLancePackage(entry.source, projectDir);
      });

      return prior;
    };

    return proxy;
  }

  function isLancePackage(packageName: string, projectDir: string): boolean {
    let dir = projectDir;

    while (true) {
      const pkgJsonPath = path.join(dir, "node_modules", packageName, "package.json");

      try {
        const raw = fs.readFileSync(pkgJsonPath, "utf-8");
        const pkg = JSON.parse(raw);
        return pkg.lance === true;
      } catch {
        // not found at this level — walk up
      }

      const parent = path.dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }

    return false;
  }

  return { create };
}

export = init;
