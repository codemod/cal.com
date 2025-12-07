#!/usr/bin/env node
import pino from 'pino'
const logger = pino()
/**
 * This script is used to prepare local environment for delegation credentials testing.
 * It prepares Acme organization and its owner user with email owner1-acme@example.com to test Delegation Credentials with Calendar Cache
 */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Parse newEmail from args
  const newEmail = process.argv[2] || "hariom@cal.com";
  logger.info(`Using newEmail: ${newEmail}`);

  // 1. Update user email
  let user = await prisma.user.findUnique({
    where: { email: "owner1-acme@example.com" },
  });
  if (!user) {
    // Check if user with newEmail exists
    user = await prisma.user.findUnique({ where: { email: newEmail } });
    if (user) {
      logger.info(`User with newEmail (${newEmail}) already exists. Skipping email update step.`);
    } else {
      logger.error(
        "User with email owner1-acme@example.com not found, and user with newEmail also not found."
      );
      process.exit(1);
    }
  } else {
    if (user.email !== newEmail) {
      await prisma.user.update({
        where: { id: user.id },
        data: { email: newEmail },
      });
      logger.info(`Updated user email to ${newEmail}`);
    } else {
      logger.info("User email already set to newEmail, skipping update.");
    }
  }

  // 2. Find organization (Team)
  const org = await prisma.team.findFirst({
    where: { slug: "acme", isOrganization: true },
  });
  if (!org) {
    logger.error("Organization (Team) with slug=acme and isOrganization=true not found.");
    process.exit(1);
  }
  logger.info(`Found organization: id=${org.id}, slug=${org.slug}`);

  // 3. Ensure TeamFeatures: delegation-credential
  const delegationFeature = await prisma.teamFeatures.findUnique({
    where: {
      teamId_featureId: {
        teamId: org.id,
        featureId: "delegation-credential",
      },
    },
  });
  if (!delegationFeature) {
    await prisma.teamFeatures.create({
      data: {
        teamId: org.id,
        featureId: "delegation-credential",
        assignedAt: new Date(),
        assignedBy: "prepare-local-script",
      },
    });
    logger.info("Created TeamFeatures: delegation-credential");
  } else {
    logger.info("TeamFeatures: delegation-credential already exists, skipping.");
  }

  // 4. Ensure TeamFeatures: calendar-cache
  const calendarCacheFeature = await prisma.teamFeatures.findUnique({
    where: {
      teamId_featureId: {
        teamId: org.id,
        featureId: "calendar-cache",
      },
    },
  });
  if (!calendarCacheFeature) {
    await prisma.teamFeatures.create({
      data: {
        teamId: org.id,
        featureId: "calendar-cache",
        assignedAt: new Date(),
        assignedBy: "prepare-local-script",
      },
    });
    logger.info("Created TeamFeatures: calendar-cache");
  } else {
    logger.info("TeamFeatures: calendar-cache already exists, skipping.");
  }

  // 5. Add WorkspacePlatform record
  const workspacePlatform = await prisma.workspacePlatform.findUnique({
    where: { slug: "google" },
  });
  if (!workspacePlatform) {
    await prisma.workspacePlatform.create({
      data: {
        slug: "google",
        name: "Google",
        enabled: true,
        description: "Google Workspace Platform",
        defaultServiceAccountKey: {}, // Empty object, update as needed
      },
    });
    logger.info("Created WorkspacePlatform: google");
  } else {
    logger.info("WorkspacePlatform: google already exists, skipping.");
  }

  // 6. Enable Feature records for 'calendar-cache' and 'delegation-credential'
  const featureSlugs = ["calendar-cache", "delegation-credential"];
  for (const slug of featureSlugs) {
    const feature = await prisma.feature.findUnique({ where: { slug } });
    if (!feature) {
      logger.error(`Feature with slug ${slug} not found.`);
      process.exit(1);
    }
    if (!feature.enabled) {
      await prisma.feature.update({ where: { slug }, data: { enabled: true } });
      logger.info(`Enabled Feature: ${slug}`);
    } else {
      logger.info(`Feature: ${slug} already enabled, skipping.`);
    }
  }
  logger.info(`Now you can sign in with ${newEmail} and create a new Delegation Credential.`);
}

main()
  .catch((e) => {
    logger.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
