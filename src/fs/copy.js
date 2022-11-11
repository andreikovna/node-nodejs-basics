import { dirname } from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as path from "path";

const fsPromises = fs.promises;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const destination = path.join(__dirname, "files-copy");
const source = path.join(__dirname, "files");

const copy = async () => {
  function copyFiles() {
    fs.mkdir(destination, { recursive: true }, (err) => {
      if (err) {
        throw new Error("FS operation failed");
      }
      fs.readdir(source, { withFileTypes: true }, (err, files) => {
        if (err) {
          throw new Error("FS operation failed");
        } else {
          files.forEach((file) => {
            const fileName = file.name.toString();

            fsPromises
              .copyFile(
                path.join(__dirname, "files", fileName),
                path.join(__dirname, "files-copy", fileName)
              )
              .catch(function (error) {
                throw new Error("FS operation failed");
              });
          });
        }
      });
    });
  }

  fs.access(source, function (error) {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      fs.access(destination, function (error) {
        if (error) {
          copyFiles();
        } else {
          throw new Error("FS operation failed");
        }
      });
    }
  });
};

copy();
