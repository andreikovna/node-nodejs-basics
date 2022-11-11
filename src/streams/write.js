import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as path from "path";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const { stdin, stdout } = process;

  const resultText = path.join(__dirname, "files", "fileToWrite.txt");
  const output = fs.createWriteStream(resultText);

  console.log("\nplease, write smth here:");
  
  stdin.on("data", (data) => {
    output.write(data);
  });
};

await write();
