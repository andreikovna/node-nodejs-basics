import { dirname } from "path";
import { fileURLToPath } from "url";
import { mkdir, access, readdir, copyFile } from "node:fs/promises";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const source = path.join(__dirname, "files");

const list = async () => {
  await readdir(source)
    .then((files) => {
      const resultFiles = files.map((file) => {
        return file;
      });
      console.log("\nCurrent directory filenames:\n", resultFiles);
    })
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await list();
