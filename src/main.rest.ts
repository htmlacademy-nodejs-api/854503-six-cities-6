import 'reflect-metadata';
import { Container } from 'inversify';
import { RestConfig, IConfig, RestSchema } from './common/libs/config/index.js';
import { Logger, ILogger } from './common/libs/logger/index.js';
import { RestApplication } from './rest/rest.application.js';
import { Components } from './common/typings/component.enum.js';


async function bootstrap() {
  const container = new Container();

  container.bind<RestApplication>(Components.RestApplication).to(RestApplication).inSingletonScope();
  container.bind<ILogger>(Components.Logger).to(Logger).inSingletonScope();
  container.bind<IConfig<RestSchema>>(Components.Config).to(RestConfig).inSingletonScope();

  const application = container.get<RestApplication>(Components.RestApplication);
  await application.init();
}

bootstrap();
