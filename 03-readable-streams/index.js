import { Readable } from "stream";

async function* generate() {
  yield "Inside";
  yield "A";
  yield "Readable";
  yield "Stream";
}

const readableStream = Readable.from(generate());

readableStream.on("data", (data) => console.log(data.toString()));
readableStream.on("end", () => console.log("That's it no more data for you"));
