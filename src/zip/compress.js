import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as zlib from "zlib";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
const archive = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const readStream = fs.createReadStream(fileToCompress, 'utf-8');
  const writeStream = fs.createWriteStream(archive);
  const archivator = zlib.createGzip();

  readStream.pipe(archivator).pipe(writeStream).on('finish', () => {
    fs.rm(fileToCompress, () => console.log('Done!'));
  });
};

await compress();
