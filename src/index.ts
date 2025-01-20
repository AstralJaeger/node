import log4js from "log4js";

import { Environment } from './environment';

log4js.configure({
  appenders: { console: { type: "console" } },
  categories: { default: { appenders: ["console"], level: "info" } },
});

const env = Environment.getInstance();
const log = log4js.getLogger();

log.info(`Sentry Token set: ${env.SENTRY_TOKEN != null}`);

process.on("SIGINT", () => {
  // Graceful shutdown here
  log.info("Terminating application gracefully.");
  process.exit();
});
