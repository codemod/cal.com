import pino from 'pino'
const logger = pino()
export const validJson = (jsonString: string) => {
  try {
    const o = JSON.parse(jsonString);
    if (o && typeof o === "object") {
      return o;
    }
  } catch (e) {
    logger.info("Invalid JSON:", e);
  }
  return false;
};
