import { TSVFileReader } from '../../common/libs/file-reader/tsv-file-reader.js';
import { createOffer } from '../../common/utils/offer.js';
import { getErrorMassage } from '../../common/utils/utils.js';
import { ICommand } from './command.interface.js';

export class ImportCommand implements ICommand {
  public async execute(...parameters: string[]): Promise<void> {
    const [filename] = parameters;
    const fileReader = new TSVFileReader(filename.trim());

    fileReader.on('line', this.onImportedLine);
    fileReader.on('end', this.onCompleteImport);

    try {
      await fileReader.read();
    } catch (error) {
      console.error(`Can't import data from file: ${filename}`);
      console.error(getErrorMassage(error));
    }
  }

  public getName(): string {
    return '--import';
  }

  private onImportedLine(line: string) {
    const offer = createOffer(line);

    console.info(offer);
  }

  private onCompleteImport(amount: number) {
    console.info(`${amount} lines imported.`);
  }
}
