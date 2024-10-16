import http from "http";
import os from "os";

const osData = {
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  homedir: os.homedir(),
  userInfo: os.userInfo(),
  computerName: os.hostname(),
};
// console.log(osData);

// console.log(process.argv);
