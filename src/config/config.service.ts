import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';
import * as path from 'path';
export interface EnvConfig {
  [prop: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;
  constructor() {
    const dir = path.dirname(__filename) + '/';
    const configFile =dotenv.parse(
      fs.readFileSync(dir + `./${process.env.NODE_ENV || 'development'}.env`),
    );
    this.envConfig = this.validateInput(configFile);
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'test', 'provision'])
        .default('development'),

      PORT: Joi.number().default(8088),

      MYSQL_HOST: Joi.string().default('localhost'),

      MYSQL_PORT: Joi.number().default(3306),

      MYSQL_USER: Joi.string().default('root'),

      MYSQL_PASS: Joi.string(),

      MYSQL_DB: Joi.string().required(),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  get env(): string {
    return this.envConfig.NODE_ENV;
  }

  get port(): number {
    return Number(this.envConfig.PORT);
  }

  get databaseHost(): string {
    return this.envConfig.MYSQL_HOST;
  }

  get databasePort(): number {
    return Number(this.envConfig.MYSQL_PORT);
  }

  get databaseUserName(): string {
    return this.envConfig.MYSQL_USER;
  }

  get databasePassword(): string {
    return this.envConfig.MYSQL_PASS;
  }

  get databaseName(): string {
    return this.envConfig.MYSQL_DB;
  }
}
