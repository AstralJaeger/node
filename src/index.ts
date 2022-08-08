import {Environment} from './environment';

const env = Environment.getInstance();
console.log(`Sentry Token set: ${env.SENTRY_TOKEN != null}`);

process.on("SIGINT", () => {
  // Graceful shutdown here
  process.exit();
});
