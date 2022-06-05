import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as path from "path";
import { Transform } from "stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const transform = async () => {
  const { stdin, stdout } = process;

  console.log('Type smth:');
  const reversedTransform = function () {
    return new Transform({
      transform(chunk, _, callback) {
        this.push(chunk.toString().split("").reverse().join(""));
        callback();
        process.exit();
      },
    });
  };

  stdin.pipe(reversedTransform()).pipe(stdout);
};
