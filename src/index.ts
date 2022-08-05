import {Environment} from './environment';

const env = Environment.getInstance();
console.log(`Sentry Token set: ${env.SENTRY_TOKEN != null}`);
