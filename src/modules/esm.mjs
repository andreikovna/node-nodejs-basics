import path from "path";
import { release, version } from "os";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import './files/c.js';
import { readFile } from 'fs/promises';

const a = JSON.parse(await readFile(new URL('./files/a.json', import.meta.url)));
const b = JSON.parse(await readFile(new URL('./files/b.json', import.meta.url)));

const random = Math.random();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export let unknownObject;

if (random > 0.5) {
    unknownObject = { ...a };
} else {
    unknownObject = { ...b };
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServer((_, res) => {
    res.end('Request accepted');
});
