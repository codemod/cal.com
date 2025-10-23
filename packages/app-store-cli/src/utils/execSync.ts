import child_process from "child_process";

const execSync = async (cmd: string) => {
  const silent = process.env.DEBUG === "1" ? false : true;
  if (!silent) {
    logger.log(`${process.cwd()}$: ${cmd}`);
  }
  const result: string = await new Promise((resolve, reject) => {
    child_process.exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        logger.log(err);
      }
      if (stderr && !silent) {
        logger.log(stderr);
      }
      resolve(stdout);
    });
  });

  if (!silent) {
    logger.log(result.toString());
  }
  return cmd;
};
export default execSync;
