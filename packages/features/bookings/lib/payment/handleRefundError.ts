import pino from 'pino'
import { sendOrganizerPaymentRefundFailedEmail } from "@calcom/emails";
import type { CalendarEvent } from "@calcom/types/Calendar";
const logger = pino()

const handleRefundError = async (opts: { event: CalendarEvent; reason: string; paymentId: string }) => {
  logger.error(`refund failed: ${opts.reason} for booking '${opts.event.uid}'`);
  try {
    await sendOrganizerPaymentRefundFailedEmail({
      ...opts.event,
      paymentInfo: { reason: opts.reason, id: opts.paymentId },
    });
  } catch (e) {
    logger.error(e);
  }
};

export { handleRefundError };
