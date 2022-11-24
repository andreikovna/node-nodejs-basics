import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as path from "path";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const { stdin } = process;

  const fileToWrite = path.join(__dirname, "files", "fileToWrite.txt");
  const writeStream = fs.createWriteStream(fileToWrite);

  console.log("\nplease, write smth here:");

  stdin.pipe(writeStream);
};

await write();
