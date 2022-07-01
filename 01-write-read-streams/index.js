import { write, read } from "./stream-functions.js";

const readWriteFile = async (dir) => {
  await write(dir);
  await read(dir);
};

const directory = "./data/stream-sample-text.txt";
await readWriteFile(directory);
