import { Transform } from "stream";
import { stringify } from "ndjson";

const GreetUser = Transform({
  objectMode: true,
  transform: ({ firstName, lastName }, encoding, callback) => {
    callback(null, { greeting: `Hello ${firstName} - ${lastName}` });
  },
});

GreetUser.pipe(stringify()).pipe(process.stdout);

GreetUser.write({ firstName: "Bruno", lastName: "Silveira" });
