import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const newPath = path.join(__dirname, "files", "properFilename.md");
const oldPath = path.join(__dirname, "files", "wrongFilename.txt");

const rename = async () => {
  fs.access(oldPath, (error) => {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      fs.access(newPath, (err) => {
        if (err) {
          fs.rename(oldPath, newPath, (err) => {
            if (err) {
              throw new Error("FS operation failed");
            }
          });
        } else {
          throw new Error("FS operation failed");
        }
      });
    }
  });
};

await rename();
