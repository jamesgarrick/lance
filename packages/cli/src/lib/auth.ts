import { homedir } from "node:os";
import { join } from "node:path";

export interface LanceRc {
	token?: string;
}

const RC_PATH = join(homedir(), ".lancerc");

export async function readRc(): Promise<LanceRc> {
	const file = Bun.file(RC_PATH);
	if (!(await file.exists())) return {};
	return JSON.parse(await file.text()) as LanceRc;
}

export async function writeRc(value: LanceRc): Promise<void> {
	await Bun.write(RC_PATH, `${JSON.stringify(value, null, 2)}\n`);
}

export async function getToken(): Promise<string | null> {
	if (process.env.LANCE_TOKEN) return process.env.LANCE_TOKEN;
	const rc = await readRc();
	return rc.token ?? null;
}

export { RC_PATH };
