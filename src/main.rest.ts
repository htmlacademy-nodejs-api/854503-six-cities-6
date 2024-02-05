import { RestConfig } from './common/libs/config/rest.config.js';
import { Logger } from './common/libs/logger/logger.js';
import { RestApplication } from './rest/rest.application.js';


async function bootstrap() {
  const logger = new Logger();
  const config = new RestConfig(logger);
  const application = new RestApplication(logger, config);

  await application.init();
}

bootstrap();
