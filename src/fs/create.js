import { dirname } from "path";
import { fileURLToPath } from "url";
import { promises as fs } from 'fs';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const text = "I am fresh and young";
  const filePath = path.join(__dirname, "files", "fresh.txt");
  try {
    await fs.writeFile(filePath, text, { flag: "wx" })
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
