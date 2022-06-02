import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const source = path.join(__dirname, "files");

export const list = async () => {
  fs.readdir(source, { withFileTypes: true }, (err, files) => {
    if (err) throw new Error("FS operation failed");
    else {
      const resultFiles = [];
      files.map((file) => resultFiles.push(file.name));
      console.log("\nCurrent directory filenames:\n", resultFiles);
    }
  });
};
