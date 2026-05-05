import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const coreRoot = path.resolve(__dirname, "../../core");

execFileSync(process.execPath, [path.join(coreRoot, "scripts/generate-cfg-all.mjs")], {
	stdio: "inherit",
	cwd: coreRoot,
});
