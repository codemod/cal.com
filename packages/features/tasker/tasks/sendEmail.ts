import pino from 'pino'
import { z } from "zod";
const logger = pino()

const sendEmailPayloadSchema = z.object({
  /**  */
  to: z.string(),
  /** The email template to send */
  template: z.string(),
  payload: z.string(),
});

export async function sendEmail(payload: string): Promise<void> {
  try {
    const parsedPayload = sendEmailPayloadSchema.parse(JSON.parse(payload));
    logger.info(parsedPayload);
    const emails = await import("@calcom/emails");
    const email = emails[parsedPayload.template as keyof typeof emails];
    if (!email) throw new Error("Invalid email template");
    // @ts-expect-error - TODO bring back email type safety
    await email(parsedPayload.to);
  } catch (error) {
    // ... handle error
    logger.error(error);
    throw error;
  }
}
