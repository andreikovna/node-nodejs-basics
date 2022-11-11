import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as zlib from "zlib";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToDecompress = path.join(__dirname, "files", "archive.gz");
const decompressedPath = path.join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
  const readStream = fs.createReadStream(fileToDecompress);
  const writeStream = fs.createWriteStream(decompressedPath);

  readStream.pipe(zlib.createGunzip()).pipe(writeStream);
};

await decompress();
