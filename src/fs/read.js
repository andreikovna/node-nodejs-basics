import { dirname } from "path";
import { fileURLToPath } from "url";
import { readFile } from 'node:fs/promises';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { stdout } = process;
const fileToRead = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const contents = await readFile(fileToRead, { encoding: "utf8" });
    console.log(contents);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
