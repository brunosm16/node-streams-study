import fs from "fs";
import { Transform } from "stream";

const rs = fs.createReadStream("./data/sample-text-uppercase.txt");
const transformedTextES6 = fs.createWriteStream(
  "./data/transformed-text-es6.txt"
);

class Separator extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().replace(".", ","));
    callback();
  }
}

rs.pipe(new Separator()).pipe(transformedTextES6);
