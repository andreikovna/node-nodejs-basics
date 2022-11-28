import { Transform } from "stream";

const transform = async () => {
  const { stdin, stdout } = process;

  console.log('Type smth:');
  const reversedData = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
      process.exit();
    },
  });

  stdin.pipe(reversedData).pipe(stdout);
};

await transform();
