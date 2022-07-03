import { pipeline, Transform } from "stream";
import { promisify } from "util";
import fs from "fs";

const rs = fs.createReadStream("./data/sample-pipeline-text.txt");
const sampleUpperCasePipelineText = fs.createWriteStream(
  "./data/sample-uppercase-pipeline-text.txt"
);

const promisifyPipeline = promisify(pipeline);

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

const runPipeline = async () =>
  await promisifyPipeline(rs, upperCase, sampleUpperCasePipelineText);

runPipeline()
  .then(() => console.log("pipeline succeded"))
  .catch(() => console.error("an error occurred"));
