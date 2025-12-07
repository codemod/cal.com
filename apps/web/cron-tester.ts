import pino from 'pino'
import { CronJob } from "cron";
import dotEnv from "dotenv";
const logger = pino()

dotEnv.config({ path: "../../.env" });

async function fetchCron(endpoint: string) {
  const apiKey = process.env.CRON_API_KEY;

  const res = await fetch(`http://localhost:3000/api${endpoint}?apiKey=${apiKey}`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.CRON_SECRET}`,
    },
  });
  const json = await res.json();
  logger.info(endpoint, json);
}

try {
  logger.info("⏳ Running cron endpoints");
  new CronJob(
    // Each 5 seconds
    "*/5 * * * * *",
    async function () {
      await Promise.allSettled([
        fetchCron("/cron/calendar-subscriptions"),
        // fetchCron("/calendar-cache/cron"),
        // fetchCron("/cron/calVideoNoShowWebhookTriggers"),
        fetchCron("/tasks/cron"),
      ]);
    },
    null,
    true,
    "America/Los_Angeles"
  );
} catch (_err) {
  logger.error("❌ ❌ ❌ Something went wrong ❌ ❌ ❌");
  process.exit(1);
}
