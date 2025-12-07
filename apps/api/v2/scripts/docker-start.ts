import pino from 'pino'
import { execSync } from "child_process";
const logger = pino()

function checkCommandExists(command: string): boolean {
  try {
    execSync(`${command} --version`, { stdio: "ignore" });
    return true;
  } catch (e) {
    return false;
  }
}

try {
  // Check if docker is installed
  if (!checkCommandExists("docker")) {
    throw new Error("Docker is not installed");
  }

  // Try docker compose first (new syntax)
  try {
    execSync("docker compose version", { stdio: "ignore" });
    logger.info("Starting containers with docker compose...");
    execSync("docker compose up -d", { stdio: "inherit" });
  } catch (e) {
    // Fall back to docker-compose if the above fails
    if (checkCommandExists("docker-compose")) {
      logger.info("Starting containers with docker-compose...");
      execSync("docker-compose up -d", { stdio: "inherit" });
    } else {
      throw new Error("Neither 'docker compose' nor 'docker-compose' command is available");
    }
  }
} catch (error) {
  logger.error(`Error: ${error instanceof Error ? error.message : "Unknown error occurred"}`);
  process.exit(1);
}
