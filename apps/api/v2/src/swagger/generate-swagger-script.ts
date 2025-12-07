import pino from 'pino'
import "dotenv/config";
const logger = pino()

import { bootstrap } from "../app";
import { createNestApp } from "../main";
import { generateSwaggerForApp } from "../swagger/generate-swagger";

generateSwagger()
  .then(() => {
    logger.info("✅ Swagger generation completed successfully");
    process.exit(0);
  })
  .catch((error: Error) => {
    logger.error("❌ Failed to generate swagger", { error: error.stack });
    process.exit(1);
  });

async function generateSwagger() {
  const app = await createNestApp();

  try {
    bootstrap(app);
    await generateSwaggerForApp(app);
  } catch (error) {
    logger.error(error);
    throw error;
  } finally {
    await app.close();
  }
}
