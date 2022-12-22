/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.22
 * 
 * Streams are nice abstractions for
 *    a data source (a readable stream) and
 *    a data consumer (a writable stream).
 * 
 * Further reading:
 * 1. Node.js Child Processes: https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/
 * 2. How to Use Buffers in Node.js: https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/#:~:text=What%20Are%20Buffers%3F,methods%20specifically%20for%20binary%20data
 * 
 * */

function main_stream_read() {
  const fs = require("fs");

  const readStream = fs.createReadStream("./dummy.txt", "utf-8");
  // works just like process.stdin

  let fileTxt = "";

  console.log("Type something...");
  readStream.on("data", data => { // is read by chunks in 65535 characters
    console.log(`I've read ${data.length-1} characters of text.`);
    fileTxt += data;
  });

  readStream.once("data", data => { // read one chunk in 65535 characters
    // console.log(data);
  });

  readStream.on("end", () => {
    console.log("Finished reading file.");
    console.log(fileTxt);
  });
}

function main_stream_write() {
  const fs = require("fs");

  const writeStream = fs.createWriteStream("./dummy_2.txt", "utf-8");
  const readStream = fs.createReadStream("./dummy.txt", "utf-8");
  // works just like process.stdout

  // writeStream.write("Hello World/n");

  // readStream.on("data", (data) => { // here we actually copied the file
  //   writeStream.write(data);
  // });

  // because it is quite standard functionality we can just use .pipe method

  process.stdin.pipe(writeStream); // stdin data is written directly to the file
  readStream.pipe(writeStream);
}

// main_stream_write();
main_stream_read();