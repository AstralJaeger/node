import env from 'env-var';

/**
 * Type safe environment variables read as singleton.
 */
export class Environment {
  private static instance: Environment;

  /**
   * Sentry DSL Token for Sentry Analytics
   */
  public readonly SENTRY_TOKEN: string;

  /**
   * Private constructor, reads environment
   * @private
   */
  private constructor() {
    this.SENTRY_TOKEN = env.get('SENTRY_TOKEN').required().asString();
  }

  /**
   * @return Environment Returns the environment instance for later use.
   */
  public static getInstance(): Environment {
    if (Environment.instance == null) {
      Environment.instance = new Environment();
    }
    return Environment.instance;
  }
}
