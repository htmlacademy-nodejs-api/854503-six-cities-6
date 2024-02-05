import { resolve } from 'node:path';
import { injectable } from 'inversify';
import { Logger as PinoInstance, pino, transport } from 'pino';
import { ILogger } from './index.js';
import { getCurrentModuleDerectoryPath } from '../../utils/index.js';

@injectable()
export class Logger implements ILogger {
  private readonly pinoLogger: PinoInstance;

  constructor() {
    const modulePath = getCurrentModuleDerectoryPath();
    const logFilePath = 'logs/rest.log';
    const destination = resolve(modulePath, '../../../', logFilePath);
    const multiTransport = transport({
      targets: [
        {
          target: 'pino/file',
          options: { destination },
          level: 'debug',
        },
        {
          target: 'pino/file',
          level: 'debug',
          options: {},
        }
      ]
    });

    this.pinoLogger = pino({}, multiTransport);
  }

  public info(message: string, ...args: unknown[]) {
    this.pinoLogger.info(message, ...args);
  }

  public debug(message: string, ...args: unknown[]) {
    this.pinoLogger.debug(message, ...args);
  }

  public warn(message: string, ...args: unknown[]) {
    this.pinoLogger.warn(message, ...args);
  }

  public error(message: string, error: Error, ...args: unknown[]) {
    this.pinoLogger.error(error, message, ...args);
  }
}
