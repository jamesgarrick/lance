import { NextRequest, NextResponse } from "next/server";

interface OAuthStatePayload {
	nonce: string;
	return_to?: string;
}

function requiredEnv(name: string): string {
	const value = process.env[name];
	if (!value) throw new Error(`Missing required env var: ${name}`);
	return value;
}

function toBase64Url(input: string): string {
	return Buffer.from(input, "utf8").toString("base64url");
}

function createState(returnTo: string | null): string {
	const payload: OAuthStatePayload = {
		nonce: crypto.randomUUID(),
		return_to: returnTo ?? undefined,
	};
	return toBase64Url(JSON.stringify(payload));
}

function getRedirectUri(req: NextRequest): string {
	return process.env.GITHUB_REDIRECT_URI ?? `${req.nextUrl.origin}/auth/callback`;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
	try {
		const clientId = requiredEnv("GITHUB_CLIENT_ID");
		const returnTo = req.nextUrl.searchParams.get("return_to");
		const redirectUri = getRedirectUri(req);
		const state = createState(returnTo);

		const githubUrl = new URL("https://github.com/login/oauth/authorize");
		githubUrl.searchParams.set("client_id", clientId);
		githubUrl.searchParams.set("redirect_uri", redirectUri);
		githubUrl.searchParams.set("scope", "read:user");
		githubUrl.searchParams.set("state", state);

		return NextResponse.redirect(githubUrl);
	} catch (error) {
		return NextResponse.json(
			{
				error: "OAuth start failed",
				details: error instanceof Error ? error.message : String(error),
			},
			{ status: 500 },
		);
	}
}
