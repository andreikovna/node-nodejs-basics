import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as path from "path";

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    
    const {stdout} = process;
    
    const resultText = path.join(__dirname, 'files', 'fileToRead.txt');
    const readStream = fs.createReadStream(resultText, 'utf-8');
    
    readStream.on ('data', chunk => stdout.write(chunk));
};

await read();
