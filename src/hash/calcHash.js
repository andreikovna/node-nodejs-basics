import { dirname } from "path";
import { fileURLToPath } from "url";
import { promises as fs } from "fs";
import * as path from "path";
import { createHash } from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToRead = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const fileToCalculate = await fs.readFile(fileToRead, "utf8");
    const result = createHash("sha256").update(fileToCalculate).digest("hex");
    console.log(result);
  } catch (err) {
    throw new Error('Operation failed');
  }
  
};

await calculateHash();
