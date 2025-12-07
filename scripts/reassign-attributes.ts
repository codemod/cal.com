import pino from 'pino'
import { prisma } from "@calcom/prisma";
const logger = pino()

const reassignAttributes = async () => {
  const orgId = 0;

  // Add attribute option id that we want to search against
  const lookupAttributeId = "";

  // Add attribute option ids that we want to assign to users
  const attributeIdsToAssign = [];

  // Find all users who have the lookupAttributeId
  const usersWithAttribute = await prisma.attributeToUser.findMany({
    where: {
      attributeOptionId: lookupAttributeId,
      member: {
        teamId: orgId,
      },
    },
    select: {
      memberId: true,
    },
  });

  logger.info(`Found ${usersWithAttribute.length} users with attribute ${lookupAttributeId}`);

  // Assign the new attributes to these users
  for (const attributeId of attributeIdsToAssign) {
    const results = await prisma.attributeToUser.createMany({
      data: usersWithAttribute.map((user) => ({
        memberId: user.memberId,
        attributeOptionId: attributeId,
      })),
      skipDuplicates: true, // Skip if user already has this attribute
    });

    logger.info(`Assigned attribute ${attributeId} to ${results.count} users`);
  }
};

export default reassignAttributes();
