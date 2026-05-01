import { NextRequest, NextResponse } from "next/server";

interface GithubTokenResponse {
	access_token?: string;
	error?: string;
	error_description?: string;
}

interface GithubUserResponse {
	login?: string;
}

interface RegistryLoginResponse {
	token?: string;
	user?: string;
	scope?: string;
	error?: string;
}

interface OAuthStatePayload {
	nonce?: string;
	return_to?: string;
}

async function parseJsonResponse<T>(response: Response): Promise<{
	ok: true;
	data: T;
} | {
	ok: false;
	raw: string;
}> {
	const raw = await response.text();
	if (!raw) {
		return { ok: false, raw: "" };
	}
	try {
		return { ok: true, data: JSON.parse(raw) as T };
	} catch {
		return { ok: false, raw };
	}
}

function requiredEnv(name: string): string {
	const value = process.env[name];
	if (!value) throw new Error(`Missing required env var: ${name}`);
	return value;
}

function getRegistryLoginUrl(): string {
	return process.env.REGISTRY_AUTH_LOGIN_URL ?? "http://localhost:8787/auth/login";
}

function getDefaultSuccessRedirect(): string | null {
	return process.env.OAUTH_SUCCESS_REDIRECT ?? null;
}

function fromBase64Url(input: string): string {
	return Buffer.from(input, "base64url").toString("utf8");
}

function parseStatePayload(state: string): OAuthStatePayload | null {
	if (!state) return null;
	try {
		return JSON.parse(fromBase64Url(state)) as OAuthStatePayload;
	} catch {
		return null;
	}
}

function isLocalCallbackTarget(target: string): boolean {
	try {
		const url = new URL(target);
		if (url.protocol !== "http:") return false;
		return url.hostname === "localhost" || url.hostname === "127.0.0.1";
	} catch {
		return false;
	}
}

function buildRedirectWithParams(target: string, params: Record<string, string>): URL {
	const url = new URL(target);
	for (const [key, value] of Object.entries(params)) {
		url.searchParams.set(key, value);
	}
	return url;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
	const code = req.nextUrl.searchParams.get("code");
	const state = req.nextUrl.searchParams.get("state") ?? "";
	const returnToFromQuery = req.nextUrl.searchParams.get("return_to");
	const statePayload = parseStatePayload(state);
	const returnToFromState = statePayload?.return_to ?? null;
	const returnTo =
		returnToFromQuery ??
		(isLocalCallbackTarget(returnToFromState ?? "") ? returnToFromState : null);

	if (!code) {
		return NextResponse.json({ error: "Missing code query parameter" }, { status: 400 });
	}

	try {
		const clientId = requiredEnv("GITHUB_CLIENT_ID");
		const clientSecret = requiredEnv("GITHUB_CLIENT_SECRET");

		const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				client_id: clientId,
				client_secret: clientSecret,
				code,
			}),
			signal: AbortSignal.timeout(15000),
			cache: "no-store",
		});

		if (!tokenResponse.ok) {
			return NextResponse.json(
				{ error: "GitHub token exchange failed", status: tokenResponse.status },
				{ status: 502 },
			);
		}

		const tokenParsed = await parseJsonResponse<GithubTokenResponse>(tokenResponse);
		if (!tokenParsed.ok) {
			return NextResponse.json(
				{
					error: "GitHub token exchange returned non-JSON",
					status: tokenResponse.status,
					body: tokenParsed.raw.slice(0, 400),
				},
				{ status: 502 },
			);
		}
		const tokenBody = tokenParsed.data;
		if (!tokenBody.access_token) {
			return NextResponse.json(
				{
					error: tokenBody.error ?? "GitHub token exchange returned no access token",
					details: tokenBody.error_description ?? "",
				},
				{ status: 502 },
			);
		}

		const userResponse = await fetch("https://api.github.com/user", {
			headers: {
				Accept: "application/vnd.github+json",
				Authorization: `Bearer ${tokenBody.access_token}`,
				"X-GitHub-Api-Version": "2022-11-28",
			},
			signal: AbortSignal.timeout(15000),
			cache: "no-store",
		});

		if (!userResponse.ok) {
			return NextResponse.json(
				{ error: "Failed to load GitHub user", status: userResponse.status },
				{ status: 502 },
			);
		}

		const userParsed = await parseJsonResponse<GithubUserResponse>(userResponse);
		if (!userParsed.ok) {
			return NextResponse.json(
				{
					error: "GitHub user endpoint returned non-JSON",
					status: userResponse.status,
					body: userParsed.raw.slice(0, 400),
				},
				{ status: 502 },
			);
		}
		const userBody = userParsed.data;
		const githubUser = userBody.login?.trim().toLowerCase();
		if (!githubUser) {
			return NextResponse.json({ error: "GitHub user login not present" }, { status: 502 });
		}

		const registryResponse = await fetch(getRegistryLoginUrl(), {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ githubUser }),
			signal: AbortSignal.timeout(15000),
			cache: "no-store",
		});

		const registryParsed =
			await parseJsonResponse<RegistryLoginResponse>(registryResponse);
		if (!registryParsed.ok) {
			return NextResponse.json(
				{
					error: "Registry login endpoint returned non-JSON",
					status: registryResponse.status,
					url: getRegistryLoginUrl(),
					body: registryParsed.raw.slice(0, 400),
				},
				{ status: 502 },
			);
		}
		const registryBody = registryParsed.data;
		if (!registryResponse.ok || !registryBody.token) {
			return NextResponse.json(
				{
					error: registryBody.error ?? "Registry login failed",
					status: registryResponse.status,
				},
				{ status: 502 },
			);
		}

		const redirectTarget = returnTo ?? getDefaultSuccessRedirect();
		if (redirectTarget) {
			const redirectUrl = buildRedirectWithParams(redirectTarget, {
				token: registryBody.token,
				user: registryBody.user ?? githubUser,
				scope: registryBody.scope ?? "",
				state,
			});
			return NextResponse.redirect(redirectUrl);
		}

		return NextResponse.json({
			ok: true,
			token: registryBody.token,
			user: registryBody.user ?? githubUser,
			scope: registryBody.scope ?? "",
			state,
		});
	} catch (error) {
		return NextResponse.json(
			{
				error: "OAuth callback failed",
				details: error instanceof Error ? error.message : String(error),
			},
			{ status: 500 },
		);
	}
}
