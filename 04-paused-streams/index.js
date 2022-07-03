import fs from "fs";

const rs = fs.createReadStream("./data/stream-sample-text.txt");

rs.on("readable", () => {
  let data = rs.read();
  while (data) {
    console.log(data.toString());
    data = rs.read();
  }
});

rs.on("end", () => console.log("No more data"));
