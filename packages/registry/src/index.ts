import { Hono } from "hono";
import { and, desc, eq, isNull, like } from "drizzle-orm";
import semver from "semver";
import { Client as MinioClient } from "minio";
import { db, pool } from "./db/client";
import { packages, versions } from "./db/schema";
import { mintToken, scopeFromUser, verifyToken } from "./auth";
import {
	canPublishPackage,
	canUseScopeForLogin,
	loadReservationPolicy,
} from "./reservation-policy";

const app = new Hono();
const reservationPolicy = loadReservationPolicy();

const bucket = process.env.S3_BUCKET ?? "lance";
const databaseUrl = process.env.DATABASE_URL ?? "postgres://postgres:dev@localhost:5432/lance";
const s3Endpoint = process.env.S3_ENDPOINT ?? "http://localhost:9000";
const s3AccessKeyId =
	process.env.AWS_S3_ID
	?? process.env.S3_ACCESS_KEY_ID
	?? "minioadmin";
const s3SecretAccessKey =
	process.env.AWS_S3_SECRET
	?? process.env.S3_SECRET_ACCESS_KEY
	?? "minioadmin";
const s3 = new Bun.S3Client({
	accessKeyId: s3AccessKeyId,
	secretAccessKey: s3SecretAccessKey,
	bucket,
	endpoint: s3Endpoint,
	region: process.env.S3_REGION ?? "us-east-1",
});

app.get("/health", (c) => c.json({ ok: true }));

app.post("/auth/login", async (c) => {
	const body = await c.req.json<{ githubUser: string }>();
	const user = body.githubUser?.trim().toLowerCase();
	if (!user) return c.json({ error: "githubUser required" }, 400);
	const scope = scopeFromUser(user);
	const scopeDecision = canUseScopeForLogin(user, scope, reservationPolicy);
	if (!scopeDecision.allowed) {
		return c.json({ error: scopeDecision.reason ?? `scope reserved: ${scope}` }, 403);
	}
	const token = await mintToken(user);
	return c.json({ token, user, scope });
});

app.get("/auth/whoami", async (c) => {
	const auth = c.req.header("authorization");
	if (!auth?.startsWith("Bearer "))
		return c.json({ error: "Missing bearer token" }, 401);
	const payload = await verifyToken(auth.slice("Bearer ".length)).catch(
		() => null,
	);
	if (!payload) return c.json({ error: "Invalid token" }, 401);
	return c.json({ user: payload.user });
});

app.get("/search", async (c) => {
	const q = c.req.query("q") ?? "";
	const rows = await db
		.select()
		.from(packages)
		.where(like(packages.name, `%${q}%`))
		.limit(50);
	const results = await Promise.all(
		rows.map(async (pkg) => {
			const latest = await db
				.select()
				.from(versions)
				.where(
					and(
						eq(versions.packageId, pkg.id),
						eq(versions.active, true),
						isNull(versions.unpublishedAt),
					),
				)
				.orderBy(desc(versions.createdAt))
				.limit(1);
			return { name: pkg.name, latest: latest[0]?.version ?? "0.0.0" };
		}),
	);
	return c.json({ results });
});

app.get("/packages/:fullName", async (c) => {
	const fullName = decodeURIComponent(c.req.param("fullName"));
	const pkg = await db
		.select()
		.from(packages)
		.where(eq(packages.name, fullName))
		.limit(1);
	if (!pkg[0]) return c.json({ error: "Package not found" }, 404);
	const vers = await db
		.select()
		.from(versions)
		.where(
			and(
				eq(versions.packageId, pkg[0].id),
				eq(versions.active, true),
				isNull(versions.unpublishedAt),
			),
		)
		.orderBy(desc(versions.createdAt));
	return c.json({
		name: pkg[0].name,
		versions: vers.map((v) => v.version).sort(semver.compare),
		dependencies: vers.at(-1) ? JSON.parse(vers.at(-1)!.dependenciesJson) : {},
		publishedAt: vers.at(-1)?.createdAt ?? null,
	});
});

app.get("/package", async (c) => {
	const fullName = c.req.query("name");
	if (!fullName) return c.json({ error: "Missing package name" }, 400);
	const pkg = await db
		.select()
		.from(packages)
		.where(eq(packages.name, fullName))
		.limit(1);
	if (!pkg[0]) return c.json({ error: "Package not found" }, 404);
	const vers = await db
		.select()
		.from(versions)
		.where(
			and(
				eq(versions.packageId, pkg[0].id),
				eq(versions.active, true),
				isNull(versions.unpublishedAt),
			),
		)
		.orderBy(desc(versions.createdAt));
	return c.json({
		name: pkg[0].name,
		versions: vers.map((v) => v.version).sort(semver.compare),
		dependencies: vers.at(-1) ? JSON.parse(vers.at(-1)!.dependenciesJson) : {},
		publishedAt: vers.at(-1)?.createdAt ?? null,
	});
});

app.get("/packages/:fullName/versions/:version/tarball", async (c) => {
	const fullName = decodeURIComponent(c.req.param("fullName"));
	const version = decodeURIComponent(c.req.param("version"));

	const pkg = await db
		.select()
		.from(packages)
		.where(eq(packages.name, fullName))
		.limit(1);
	if (!pkg[0]) return c.json({ error: "Package not found" }, 404);

	const row = await db
		.select()
		.from(versions)
		.where(
			and(
				eq(versions.packageId, pkg[0].id),
				eq(versions.version, version),
				eq(versions.active, true),
				isNull(versions.unpublishedAt),
			),
		)
		.limit(1);
	if (!row[0]) return c.json({ error: "Version not found" }, 404);

	const file = s3.file(row[0].tarballKey);
	if (!(await file.exists())) return c.json({ error: "Tarball not found" }, 404);

	return new Response(await file.arrayBuffer(), {
		headers: {
			"content-type": "application/gzip",
			"content-disposition": `attachment; filename="${pkg[0].packageName}-${version}.tgz"`,
		},
	});
});

app.get("/tarball", async (c) => {
	const fullName = c.req.query("name");
	const version = c.req.query("version");
	if (!fullName || !version)
		return c.json({ error: "Missing name or version" }, 400);

	const pkg = await db
		.select()
		.from(packages)
		.where(eq(packages.name, fullName))
		.limit(1);
	if (!pkg[0]) return c.json({ error: "Package not found" }, 404);

	const row = await db
		.select()
		.from(versions)
		.where(
			and(
				eq(versions.packageId, pkg[0].id),
				eq(versions.version, version),
				eq(versions.active, true),
				isNull(versions.unpublishedAt),
			),
		)
		.limit(1);
	if (!row[0]) return c.json({ error: "Version not found" }, 404);

	const file = s3.file(row[0].tarballKey);
	if (!(await file.exists())) return c.json({ error: "Tarball not found" }, 404);

	return new Response(await file.arrayBuffer(), {
		headers: {
			"content-type": "application/gzip",
			"content-disposition": `attachment; filename="${pkg[0].packageName}-${version}.tgz"`,
		},
	});
});

app.post("/publish", async (c) => {
	const auth = c.req.header("authorization");
	if (!auth?.startsWith("Bearer "))
		return c.json({ error: "Missing bearer token" }, 401);
	const payload = await verifyToken(auth.slice("Bearer ".length)).catch(
		() => null,
	);
	if (!payload) return c.json({ error: "Invalid token" }, 401);

	const body = await c.req.json<{
		name: string;
		version: string;
		dependencies?: Record<string, string>;
		integrity: string;
		tarballBase64Gzip: string;
	}>();

	if (!/^@[a-z0-9][a-z0-9-_]*\/[a-z0-9][a-z0-9-_]*$/i.test(body.name)) {
		return c.json({ error: "Invalid package name" }, 400);
	}
	if (!semver.valid(body.version))
		return c.json({ error: "Invalid semver version" }, 400);

	const [scope, packageName] = body.name.split("/");
	if (!scope || !packageName)
		return c.json({ error: "Invalid package name format" }, 400);
	const publishDecision = canPublishPackage(
		payload.user,
		body.name,
		reservationPolicy,
	);
	if (!publishDecision.allowed) {
		return c.json({ error: publishDecision.reason ?? "Forbidden" }, 403);
	}

	let pkg = (
		await db
			.select()
			.from(packages)
			.where(eq(packages.name, body.name))
			.limit(1)
	)[0];
	if (!pkg) {
		const inserted = await db
			.insert(packages)
			.values({ name: body.name, scope, packageName })
			.returning();
		pkg = inserted[0]!;
	}

	const existing = await db
		.select()
		.from(versions)
		.where(
			and(eq(versions.packageId, pkg.id), eq(versions.version, body.version)),
		)
		.limit(1);
	if (existing[0])
		return c.json({ error: "Version already published (immutable)" }, 409);

	const key = `${body.name}/${body.version}.tgz`;
	await s3.write(key, Buffer.from(body.tarballBase64Gzip, "base64"), {
		type: "application/gzip",
	});

	await db.insert(versions).values({
		packageId: pkg.id,
		version: body.version,
		integrity: body.integrity,
		tarballKey: key,
		dependenciesJson: JSON.stringify(body.dependencies ?? {}),
		publishedBy: payload.user,
	});

	return c.json({ ok: true, package: body.name, version: body.version });
});

app.delete("/packages/:fullName/versions/:version", async (c) => {
	const auth = c.req.header("authorization");
	if (!auth?.startsWith("Bearer "))
		return c.json({ error: "Missing bearer token" }, 401);
	const payload = await verifyToken(auth.slice("Bearer ".length)).catch(
		() => null,
	);
	if (!payload) return c.json({ error: "Invalid token" }, 401);

	const fullName = decodeURIComponent(c.req.param("fullName"));
	const version = decodeURIComponent(c.req.param("version"));
	const pkg = (
		await db.select().from(packages).where(eq(packages.name, fullName)).limit(1)
	)[0];
	if (!pkg) return c.json({ error: "Package not found" }, 404);
	const scope = fullName.split("/")[0];
	if (scope !== scopeFromUser(payload.user))
		return c.json({ error: "Forbidden" }, 403);

	const row = (
		await db
			.select()
			.from(versions)
			.where(and(eq(versions.packageId, pkg.id), eq(versions.version, version)))
			.limit(1)
	)[0];
	if (!row) return c.json({ error: "Version not found" }, 404);
	if (row.unpublishedAt) return c.json({ error: "Already unpublished" }, 409);

	const now = Date.now();
	const created = new Date(row.createdAt).getTime();
	const hours = (now - created) / (1000 * 60 * 60);
	if (hours > 72)
		return c.json({ error: "Unpublish window exceeded (72h)" }, 403);

	await db
		.update(versions)
		.set({
			active: false,
			unpublishedAt: new Date(),
			unpublishReason: "user request",
		})
		.where(eq(versions.id, row.id));

	return c.json({ ok: true });
});

const port = Number(process.env.PORT ?? 8787);
export default {
	port,
	fetch: app.fetch,
};

await ensureSchema();
await ensureBucket();
try {
	const dbHost = new URL(databaseUrl).hostname;
	const s3Host = new URL(s3Endpoint).hostname;
	console.log(`registry config: dbHost=${dbHost} s3Host=${s3Host}`);
} catch {
	console.log("registry config: unable to parse DATABASE_URL or S3_ENDPOINT");
}
console.log(`@lance/registry listening on :${port} (bucket=${bucket})`);

async function ensureBucket(): Promise<void> {
	const shouldEnsureBucket = process.env.S3_AUTO_CREATE_BUCKET === "true";
	if (!shouldEnsureBucket) return;

	try {
		const endpoint = new URL(s3Endpoint);
		const minio = new MinioClient({
			endPoint: endpoint.hostname,
			port: Number(
				endpoint.port || (endpoint.protocol === "https:" ? 443 : 80),
			),
			useSSL: endpoint.protocol === "https:",
			accessKey: s3AccessKeyId,
			secretKey: s3SecretAccessKey,
		});
		const exists = await minio.bucketExists(bucket);
		if (!exists) {
			await minio.makeBucket(bucket);
			console.log(`created S3 bucket: ${bucket}`);
		}
	} catch (err) {
		console.warn(`warning: could not ensure S3 bucket ${bucket}:`, err);
	}
}

async function ensureSchema(): Promise<void> {
	await pool.query(`
		CREATE TABLE IF NOT EXISTS packages (
			id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
			name text NOT NULL UNIQUE,
			scope text NOT NULL,
			package_name text NOT NULL,
			created_at timestamptz NOT NULL DEFAULT now()
		);
	`);

	await pool.query(`
		CREATE INDEX IF NOT EXISTS packages_scope_idx ON packages(scope);
	`);

	await pool.query(`
		CREATE TABLE IF NOT EXISTS versions (
			id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
			package_id integer NOT NULL REFERENCES packages(id) ON DELETE CASCADE,
			version text NOT NULL,
			integrity text NOT NULL,
			tarball_key text NOT NULL,
			dependencies_json text NOT NULL,
			published_by text NOT NULL,
			created_at timestamptz NOT NULL DEFAULT now(),
			unpublished_at timestamptz,
			unpublish_reason text,
			active boolean NOT NULL DEFAULT true,
			CONSTRAINT versions_pkg_version_unique UNIQUE (package_id, version)
		);
	`);

	await pool.query(`
		CREATE INDEX IF NOT EXISTS versions_pkg_idx ON versions(package_id);
	`);
}
