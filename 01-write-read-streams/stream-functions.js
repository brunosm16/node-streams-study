import fs from "fs";

const write = async (directory) => {
  const file = fs.createWriteStream(directory);

  for (let i = 0; i < 10; i++) file.write("\nLorem ipsum\n");
};

const read = async (directory) => {
  const rs = fs.createReadStream(directory);

  rs.on("data", (data) => console.log(data.toString()));
  rs.on("end", () => console.log("Thats all. No more data for you."));
};

export { read, write };
