import { createReadStream, ReadStream } from 'node:fs';
import { IFileReader } from './file-reader.interface.js';
import EventEmitter from 'node:events';

export class TSVFileReader extends EventEmitter implements IFileReader {
  private stream: ReadStream;
  private CHUNK_SIZE = 16384;

  constructor(
    private readonly filePath: string
  ) {
    super();
    this.stream = createReadStream(this.filePath, {
      encoding: 'utf-8',
      highWaterMark: this.CHUNK_SIZE,
    });
  }

  public async read(): Promise<void> {

    let remainingData = '';
    let nextLinePosition = -1;
    let importedRowCount = 0;

    for await(const chunk of this.stream) {
      remainingData += chunk.toString();

      while ((nextLinePosition = remainingData.indexOf('\n')) >= 0) {
        const completeLine = remainingData.slice(0, nextLinePosition + 1);
        remainingData = remainingData.slice(++nextLinePosition);
        importedRowCount++;

        this.emit('line', completeLine);
      }
    }

    this.emit('end', importedRowCount);
  }
}
