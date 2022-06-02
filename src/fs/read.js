import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { stdout } = process;
const fileToRead = path.join(__dirname, "files", "fileToRead.txt");

export const read = async () => {
  fs.access(fileToRead, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      const readStream = fs.createReadStream(fileToRead, "utf-8");
      readStream.on("data", (chunk) => stdout.write(chunk));
    }
  });
};
