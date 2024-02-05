import { inject, injectable } from 'inversify';
import { IConfig, RestSchema } from '../common/libs/config/index.js';
import { ILogger } from '../common/libs/logger/logger.interface.js';
import { Components } from '../common/typings/component.enum.js';

@injectable()
export class RestApplication {
  constructor (
    @inject(Components.Logger) private readonly logger: ILogger,
    @inject(Components.Config) private readonly config: IConfig<RestSchema>
  ) {}

  public async init () {
    this.logger.info('Application initialization');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);
  }
}
