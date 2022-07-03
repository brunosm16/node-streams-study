import fs from "fs";
import { Transform } from "stream";

const rs = fs.createReadStream("./data/sample-text.txt");

const sampleTextUpperCase = fs.createWriteStream(
  "./data/sample-text-uppercase.txt"
);

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

rs.pipe(uppercase).pipe(sampleTextUpperCase);
