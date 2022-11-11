import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const text = "I am fresh and young";
  const filePath = path.join(__dirname, "files", "fresh.txt");
  fs.writeFile(filePath, text, { flag: "wx" }, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await create();
