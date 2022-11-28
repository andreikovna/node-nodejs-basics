import { dirname } from "path";
import { fileURLToPath } from "url";
import * as path from "path";
import { spawn } from "child_process";

const { stdin, stdout } = process;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const scriptPath = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [scriptPath, ...args]);

  stdin.on('data', (data) => {
    childProcess.stdin.write(data);
  })

  childProcess.stdout.on('data', (data) => {
    stdout.write(data);
  })
};

spawnChildProcess(['hello', 'world', 'I am', 'happy']);
