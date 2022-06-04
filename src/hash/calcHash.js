import { dirname } from "path";
import { fileURLToPath } from "url";
import { promises as fs } from "fs";
import * as path from "path";
import { createHash } from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { stdout } = process;
const fileToRead = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

export const calculateHash = async () => {
  const fileResult = await fs.readFile(fileToRead, "utf8");
  const result = createHash("sha256").update(fileResult).digest("hex");
  stdout.write(result);
};
