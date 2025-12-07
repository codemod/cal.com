import pino from 'pino'
const logger = pino()
export const logP = (message: string) => {
  const start = performance.now();

  return () => {
    const end = performance.now();
    logger.info(`[PERF]: ${message} took ${end - start}ms`);
  };
};
