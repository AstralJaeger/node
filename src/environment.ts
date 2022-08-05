import env from "env-var";

export class Environment {

    private static instance: Environment

    public readonly SENTRY_TOKEN: string;

    private constructor() {
        this.SENTRY_TOKEN = env.get("SENTRY_TOKEN").required().asString();
    }

    public getInstance(): Environment {
        if (Environment.instance == null) {
            Environment.instance = new Environment();
        }
        return Environment.instance;
    }
}
