import { relations, sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { timestamps } from "./columns.helpers";

export const collaborators = sqliteTable("collaborators", {
  id: int().primaryKey({ autoIncrement: true }),
  userId: int().references(() => users.id),
  packageId: int().references(() => packages.id),
  ...timestamps,
});

export const collaboratorRelations = relations(collaborators, ({ one }) => ({
  package: one(packages, {
    fields: [collaborators.packageId],
    references: [packages.id],
  }),
}));

export const packages = sqliteTable("packages", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text().notNull(),
  homepage: text(),
  repository: text(),
  logo: text(),
  organizationId: int().references(() => organizations.id),
  userId: int().references(() => users.id),
  ...timestamps,
});

export const packageRelations = relations(packages, ({ one, many }) => ({
  user: one(users, {
    fields: [packages.userId],
    references: [users.id],
  }),
  organization: one(organizations, {
    fields: [packages.organizationId],
    references: [organizations.id],
  }),
  collaborators: many(collaborators),
}));

export const organizations = sqliteTable("organizations", {
  id: int().primaryKey({ autoIncrement: true }),
  avatar: text(),
  name: text().notNull(),
  ...timestamps,
});

export const organizationRelations = relations(organizations, ({ many }) => ({
  users: many(organizationUsers),
  packages: many(packages),
  organizationUsers: many(organizationUsers),
}));

export const organizationUsers = sqliteTable("organization_users", {
  id: int().primaryKey({ autoIncrement: true }),
  organizationId: int().references(() => organizations.id),
  userId: int().references(() => users.id),
  roleId: int().references(() => organizationRoles.id),
  ...timestamps,
});

export const organizationUserRelations = relations(
  organizationUsers,
  ({ one }) => ({
    organization: one(organizations, {
      fields: [organizationUsers.organizationId],
      references: [organizations.id],
    }),
    user: one(users, {
      fields: [organizationUsers.userId],
      references: [users.id],
    }),
    role: one(organizationRoles, {
      fields: [organizationUsers.roleId],
      references: [organizationRoles.id],
    }),
  }),
);

export const organizationRoles = sqliteTable("organization_roles", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  createdAt: int()
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const organizationRoleRelations = relations(
  organizationRoles,
  ({ many }) => ({
    users: many(organizationUsers),
    organizations: many(organizationUsers),
  }),
);

export const users = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  avatar: text(),
  firstName: text().notNull(),
  lastName: text().notNull(),
  username: text().notNull().unique(),
  email: text().notNull().unique(),
  password: text().notNull(),
  company: text(),
  location: text(),
  website: text(),
  twitter: text(),
  youtube: text(),
  linkedin: text(),
  ...timestamps,
});

export const userRelations = relations(users, ({ many }) => ({
  packages: many(packages),
  collaborators: many(collaborators),
  organizations: many(organizations),
  organizationUsers: many(organizationUsers),
}));
