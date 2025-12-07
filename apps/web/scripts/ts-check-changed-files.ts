import pino from 'pino'
import { execSync } from "child_process";
const logger = pino()

type Err = {
  stdout: string;
};

const diff = execSync(`git diff --name-only origin/main HEAD`).toString();

const files = diff
  .trim()
  .split("\n")
  .map((file) => file.trim())
  .filter(Boolean)
  .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"));

logger.info("ℹ️ Changed files:");
logger.info(files.map((str) => `  - ${str}`).join("\n"));

try {
  logger.info("⏳ Checking type errors..");
  execSync("yarn tsc --noEmit", {});

  logger.info("😻 No errors!");
} catch (_err) {
  const err = _err as Err;

  const output = err.stdout.toString() as string;

  const filesWithTypeErrors = files.filter((file) => output.includes(file));

  if (!filesWithTypeErrors.length) {
    logger.info(`🎉 You haven't introduced any new type errors!`);
    process.exit(0);
  }
  logger.info("❌ ❌ ❌ You seem to have touched files that have type errors ❌ ❌ ❌");
  logger.info("🙏 Please inspect the following files:");
  logger.info(filesWithTypeErrors.map((str) => `  - ${str}`).join("\n"));

  process.exit(1);
}
