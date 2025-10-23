import { execSync } from "child_process";

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

logger.log("ℹ️ Changed files:");
logger.log(files.map((str) => `  - ${str}`).join("\n"));

try {
  logger.log("⏳ Checking type errors..");
  execSync("yarn tsc --noEmit", {});

  logger.log("😻 No errors!");
} catch (_err) {
  const err = _err as Err;

  const output = err.stdout.toString() as string;

  const filesWithTypeErrors = files.filter((file) => output.includes(file));

  if (!filesWithTypeErrors.length) {
    logger.log(`🎉 You haven't introduced any new type errors!`);
    process.exit(0);
  }
  logger.log("❌ ❌ ❌ You seem to have touched files that have type errors ❌ ❌ ❌");
  logger.log("🙏 Please inspect the following files:");
  logger.log(filesWithTypeErrors.map((str) => `  - ${str}`).join("\n"));

  process.exit(1);
}
