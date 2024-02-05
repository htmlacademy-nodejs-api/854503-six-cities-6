import { IConfig } from '../common/libs/config/config.interface.js';
import { RestSchema } from '../common/libs/config/rest.schema.js';
import { ILogger } from '../common/libs/logger/logger.interface.js';


export class RestApplication {
  constructor (
    private readonly logger: ILogger,
    private readonly config: IConfig<RestSchema>
  ) {}

  public async init () {
    this.logger.info('Application initialization');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);
  }
}
