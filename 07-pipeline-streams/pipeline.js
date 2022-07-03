import fs from "fs";
import { pipeline, Transform } from "stream";

const lowerCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toLowerCase());
  },
});

pipeline(
  fs.createReadStream("./data/sample-pipeline-text.txt"),
  lowerCase,
  fs.createWriteStream("./data/sample-lowercase-pipeline-text.txt"),
  (err) => {
    if (err) console.error(err);
    else console.log("Success");
  }
);
