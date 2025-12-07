#!/usr/bin/env tsx
import pino from 'pino'
const logger = pino()

/**
 * Standalone script to create a PBAC-enabled organization with custom roles
 * Run with: npx tsx packages/prisma/seed-pbac-only.ts
 */
import { createPBACOrganization } from "./seed-pbac-organization";

async function main() {
  logger.info("🚀 Starting PBAC organization seed...");

  try {
    const result = await createPBACOrganization();

    logger.info("\n🎉 PBAC Organization created successfully!");
    logger.info("\n📋 Summary:");
    logger.info(`Organization: ${result.organization.name} (${result.organization.slug})`);
    logger.info(`Custom Roles: ${Object.keys(result.customRoles).length}`);
    logger.info(`Users: ${result.users.length}`);
    logger.info(`Team: ${result.team?.name || "None"} (${result.team?.slug || "N/A"})`);

    logger.info("\n🔐 Login Credentials:");
    result.users.forEach(({ user, role, customRole }) => {
      const roleText = customRole ? `${role} + ${customRole}` : role;
      logger.info(`  - ${user.name}: ${user.email} / password (${roleText})`);
    });

    logger.info(`\n🌐 Access URLs:`);
    logger.info(`Organization: ${process.env.NEXT_PUBLIC_WEBAPP_URL}/org/${result.organization.slug}`);
    if (result.team) {
      logger.info(`Team: ${process.env.NEXT_PUBLIC_WEBAPP_URL}/team/${result.team.slug}`);
    }
  } catch (error) {
    logger.error("❌ Error creating PBAC organization:", error);
    process.exit(1);
  }
}

main()
  .then(() => {
    logger.info("\n✅ Seed completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    logger.error("❌ Seed failed:", error);
    process.exit(1);
  });
