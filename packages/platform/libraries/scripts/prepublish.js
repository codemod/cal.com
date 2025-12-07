import pino from 'pino'
import fs from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";
const logger = pino()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fetch current version from npm registry
export function getCurrentVersion() {
  return new Promise((resolve, reject) => {
    https
      .get(
        "https://registry.npmjs.org/@calcom/platform-libraries",
        {
          headers: { Accept: "application/json" },
        },
        (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => {
            try {
              const packageInfo = JSON.parse(data);
              const currentVersion = packageInfo["dist-tags"].latest;
              resolve(currentVersion);
            } catch (error) {
              reject(error);
            }
          });
        }
      )
      .on("error", reject);
  });
}

// Increment patch version (a.b.c -> a.b.c+1)
function incrementPatchVersion(version) {
  const parts = version.split(".");
  parts[2] = String(Number(parts[2]) + 1);
  return parts.join(".");
}

async function main() {
  try {
    // Get and increment version
    const currentVersion = await getCurrentVersion();
    const newVersion = incrementPatchVersion(currentVersion);
    logger.info(`Current version in npm: ${currentVersion}. Incremented locally to ${newVersion}`);

    // Update libraries package.json version
    const librariesPath = path.join(__dirname, "..");
    const librariesPackageJsonPath = path.join(librariesPath, "package.json");
    const librariesPackageJson = JSON.parse(fs.readFileSync(librariesPackageJsonPath, "utf8"));

    librariesPackageJson.version = newVersion;
    fs.writeFileSync(librariesPackageJsonPath, `${JSON.stringify(librariesPackageJson, null, 2)}\n`);

    logger.info("Successfully incremented @calcom/platform-libraries package.json version.");
  } catch (error) {
    logger.error("Error:", error);
    process.exit(1);
  }
}

main();
