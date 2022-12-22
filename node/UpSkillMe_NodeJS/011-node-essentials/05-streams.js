/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.22
 * 
 * Streams are nice abstractions for
 *    a data source (a readable stream) and
 *    a data consumer (a writable stream).
 * 
 * */

function main_stream() {
  const fs = require("fs");

  const readStream = fs.createReadStream("./dummy.txt", "utf-8");

  console.log("Type something...");
  readStream.on("data", data => {
    console.log(`I've read ${data.length-1} characters of text.`);
  });
}

main_stream();
