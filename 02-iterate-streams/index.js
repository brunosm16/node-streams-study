import fs from "fs";

const dir = "../01-write-read-streams/data/stream-sample-text.txt";

const rs = fs.createReadStream(dir);

const runStream = async () => {
  for await (const data of rs) console.log(data.toString());
};

await runStream();
