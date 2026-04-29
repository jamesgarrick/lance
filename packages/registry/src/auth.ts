import { jwtVerify, SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.LANCE_JWT_SECRET ?? "dev-secret-change-me");

export async function mintToken(user: string): Promise<string> {
  return new SignJWT({ user })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyToken(token: string): Promise<{ user: string }> {
  const out = await jwtVerify(token, secret);
  const user = String(out.payload.user ?? out.payload.sub ?? "");
  if (!user) throw new Error("Invalid token");
  return { user };
}

export function scopeFromUser(user: string): string {
  return `@${user.toLowerCase()}`;
}

export const RESERVED_SCOPES = new Set(["@bohemia", "@arma", "@bi", "@official"]);
