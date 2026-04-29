import { boolean, index, integer, pgTable, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const packages = pgTable(
  "packages",
  {
    id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
    name: text("name").notNull(),
    scope: text("scope").notNull(),
    packageName: text("package_name").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    uniqueIndex("packages_name_unique").on(t.name),
    index("packages_scope_idx").on(t.scope),
  ],
);

export const versions = pgTable(
  "versions",
  {
    id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
    packageId: integer("package_id").notNull().references(() => packages.id, { onDelete: "cascade" }),
    version: text("version").notNull(),
    integrity: text("integrity").notNull(),
    tarballKey: text("tarball_key").notNull(),
    dependenciesJson: text("dependencies_json").notNull(),
    publishedBy: text("published_by").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    unpublishedAt: timestamp("unpublished_at", { withTimezone: true }),
    unpublishReason: text("unpublish_reason"),
    active: boolean("active").default(true).notNull(),
  },
  (t) => [
    uniqueIndex("versions_pkg_version_unique").on(t.packageId, t.version),
    index("versions_pkg_idx").on(t.packageId),
  ],
);
