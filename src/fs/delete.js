import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const removePath = path.join(__dirname, "files", "fileToRemove.txt");

export const remove = async () => {
  fs.access(removePath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.rm(removePath, (error) => {
        if (error) {
          throw new Error("FS operation failed");
        }
      });
    }
  });
};
