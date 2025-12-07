import pino from 'pino'
import { captureException as SentryCaptureException } from "@sentry/nextjs";
import type { NextMiddleware } from "next-api-middleware";
const logger = pino()

export const captureErrors: NextMiddleware = async (_req, res, next) => {
  try {
    // Catch any errors that are thrown in remaining
    // middleware and the API route handler
    await next();
  } catch (error) {
    logger.error(error);
    SentryCaptureException(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
