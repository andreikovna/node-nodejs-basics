import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const newPath = path.join(__dirname, "files", "properFilename.md");
const oldPath = path.join(__dirname, "files", "wrongFilename.txt");

export const rename = async () => {
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            throw new Error("FS operation failed");
        }
    })
};
