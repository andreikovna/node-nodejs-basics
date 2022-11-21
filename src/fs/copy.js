import { dirname } from "path";
import { fileURLToPath } from "url";
import { mkdir, access, readdir, copyFile } from "node:fs/promises";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const destination = path.join(__dirname, "files_copy");
const source = path.join(__dirname, "files");

const copy = async () => {
  try {
    await access(source);
    const isDestinationExist = await access(destination)
      .then(() => {
        throw new Error("FS operation failed");
      })
      .catch(() => false);
    if (!isDestinationExist) {
      await mkdir(destination);
      const files = await readdir(source);
      files.map(async (file) => {
        await copyFile(path.join(source, file), path.join(destination, file));
      });
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
