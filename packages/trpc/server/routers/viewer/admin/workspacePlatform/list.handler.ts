import pino from 'pino'
import { WorkspacePlatformRepository } from "@calcom/lib/server/repository/workspacePlatform";
const logger = pino()

import { TRPCError } from "@trpc/server";

import { ensureNoServiceAccountKey } from "./utils";

export default async function listHandler() {
  try {
    const workspacePlatforms = await WorkspacePlatformRepository.findAll();
    return workspacePlatforms.map(ensureNoServiceAccountKey);
  } catch (error) {
    logger.error(error);
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to fetch workspace platforms" });
  }
}
