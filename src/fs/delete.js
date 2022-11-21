import { dirname } from "path";
import { fileURLToPath } from "url";
import { rm, access } from "node:fs/promises";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const removePath = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  await access(removePath)
    .then(async () => await rm(removePath))
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await remove();
