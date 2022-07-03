import fs from "fs";

const rs = fs.createReadStream("./data/stream-sample-text.txt");

rs.pipe(process.stdout);
