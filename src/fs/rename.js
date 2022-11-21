import { dirname } from "path";
import { fileURLToPath } from "url";
import { rename as renameFile, access } from "node:fs/promises";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const newPath = path.join(__dirname, "files", "properFilename.md");
const oldPath = path.join(__dirname, "files", "wrongFilename.txt");

const rename = async () => {
  const isNewFileExist = await access(newPath)
    .then(() => true)
    .catch(() => false);
  if (isNewFileExist) {
    throw new Error("FS operation failed");
  } else {
    try {
      await renameFile(oldPath, newPath);
    } catch (err) {
      throw new Error("FS operation failed");
    }
  }
};

await rename();
