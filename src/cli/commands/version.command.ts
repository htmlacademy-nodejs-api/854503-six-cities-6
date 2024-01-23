import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ICommand } from './command.interface.js';

// type PackageJSONConfig = {
//   version: string;
// }
// value is PackageJSONConfig
function isPackageJsonConfig(value: unknown): boolean {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    Object.hasOwn(value, 'version')
  );
}

export class VersionCommand implements ICommand {
  constructor(
    private readonly filePath: string = './package.json'
  ) {}

  public getName(): string {
    return '--version';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    try {
      const version = this.readVersion();
      console.info(version);
    } catch (error: unknown) {
      console.error(`Failed to read version from ${this.filePath}`);

      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  private readVersion(): string {
    const fileContent = readFileSync(resolve(this.filePath), 'utf-8');
    const parsedJson = JSON.parse(fileContent);

    if (!isPackageJsonConfig(parsedJson)) {
      throw new Error('Failed to parse json content.');
    }

    return parsedJson.version;
  }
}
