import { ICommand } from './command.interface.js';
import { MockServerData } from '../../common/typings/mock-server-data-type.js';
import got from 'got';
import { getErrorMassage } from '../../common/utils/utils.js';
import { OfferGenerator } from '../../common/libs/offer-generator/offer-generator.js';
import { TSVFileWriter } from '../../common/libs/tsv-file-writer/tsv-file-writer.js';

export class GenerateCommand implements ICommand {
  private initialData: MockServerData;

  public async execute(...parameters: string[]): Promise<void> {
    const [amount, filePath, url] = parameters;
    const offerAmount = Number.parseInt(amount, 10);

    try {
      await this.load(url);
      await this.write(filePath, offerAmount);
    } catch (error: unknown) {
      console.error('Can\'t generate data');
      console.error(getErrorMassage(error));
    }
  }

  public async load(url: string) {
    try {
      this.initialData = await got.get(url).json();
    } catch {
      throw new Error(`Can't load data from ${url}`);
    }
  }

  public async write(filePath: string, amount: number) {
    const offerGenerator = new OfferGenerator(this.initialData);
    const tsvFileWriter = new TSVFileWriter(filePath);

    for (let i = 0; i < amount; i++) {
      tsvFileWriter.write(offerGenerator.generate());
    }
  }

  public getName(): string {
    return '--generate';
  }
}
