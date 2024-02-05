import { Logger } from './common/libs/logger/logger.js';
import { RestApplication } from './rest/rest.application.js';


async function bootstrap() {
  const logger = new Logger();
  const application = new RestApplication(logger);

  await application.init();
}

bootstrap();
