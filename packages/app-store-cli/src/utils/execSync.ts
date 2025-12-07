import pino from 'pino'
import child_process from "child_process";
const logger = pino()

const execSync = async (cmd: string) => {
  const silent = process.env.DEBUG === "1" ? false : true;
  if (!silent) {
    logger.info(`${process.cwd()}$: ${cmd}`);
  }
  const result: string = await new Promise((resolve, reject) => {
    child_process.exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        logger.info(err);
      }
      if (stderr && !silent) {
        logger.info(stderr);
      }
      resolve(stdout);
    });
  });

  if (!silent) {
    logger.info(result.toString());
  }
  return cmd;
};
export default execSync;
