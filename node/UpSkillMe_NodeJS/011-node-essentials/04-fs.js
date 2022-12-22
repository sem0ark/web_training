/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.22
 * 
 * The fs module can be used to
 * - list files in directories,
 * - create new files in directories,
 * - stream files,
 * - watch filesmodify file permissions
 * - just about anything you would need to work with files and directories.
 * 
 * further reading:
 * - ASYNCHRONOUS-VS-SYNCHRONOUS: https://adrianmejia.com/asynchronous-vs-synchronous-handling-concurrency-in-javascript/
 * - The callback pattern: https://www.yld.io/blog/the-callback-pattern/
 * - fs.rmdir - https://nodejs.org/api/fs.html#fs_fs_rmdir_path_options_callback
 * 
 * */

function main_list() {
  const fs = require("fs");

  // const files = fs.readdirSync("."); // read the list of the files, bocking
  fs.readdir(".", (err, files) => { // non-blocking, with  a callback
    if (err) throw err;

    console.log("complete");
    console.log(files);
  });

  console.log("started reading files");
}

// main_list();

function main_read() {
  const fs = require("fs");

  // const text = fs.readFileSync("./02-core-modules.js", "utf-8");
  // reading with blocking, passing the file path + encoding

  fs.readFile("./02-core-modules.js", "utf-8", (err, text) => {
    if (err) throw err;
    console.log("File contents read");
    console.log(text);
  });

  
  fs.readFile("./02-core-modules.js", (err, text) => { // we are reading in binary if we doesn't specify the encoding
    if (err) throw err;
    console.log("File contents read");
    console.log(text);
  });
}

// main_read();

function main_write_append() {
  const fs = require("fs"); // short for "file system"
  const md = `
The fs module can be used to
- list files in directories,
- create new files in directories,
- stream files,
- watch filesmodify file permissions
- just about anything you would need to work with files and directories.
`;

  fs.writeFile("./test.md", md.trim(), (err) => {
    // writing to the file, wipes out the file and then writes the data
    if (err) throw err;
    console.log("file saved");
    fs.appendFile("./test.md", md.trim(), (err) => {
      // appending to the file, it can also create files
      if (err) throw err;
      console.log("file appended");
    });
  });
}

// main_write_append();

function main_directory() {
  const fs = require("fs");

  if (fs.existsSync("./files")) { // checking if the file/folder is already here
    console.log("The directory is alredy there.");
  } else {
    fs.mkdir("./files", (err) => { // creating the folder
      if (err) throw err;
      console.log("Directory created");
    });
  }
}

function main_rename_remove_file() {
  const fs = require("fs");
  fs.renameSync("./test.md", "./txt.md"); // Sync version, use to rename files
  fs.rename("./txt.md", "./files/txt.md", (err) => {
    if (err) throw err;
    console.log("Moved successfully");
  }); // async version, use to move files

  setTimeout(() => {
    // fs.unlinkSync("./files/txt.md"); // removing a file
    // fs.unlink("./files/txt.md", (err) => {err}); // asynch removing a file
  }, 4000);
}


function main_rename_remove_directory() {
  const fs = require("fs");
  fs.renameSync("./files", "./files_data"); // for renaming

  fs.readdirSync("./files_data").forEach((file) => fs.unlinkSync(file));
  fs.rmdir("./files_data", (err) => { // for removing, we can't delete te dirctory if it has something in it
    if (err) throw err;
    console.log("removed ./files_data");
  });
  // To get a behavior similar to the rm -rf Unix command,
  // use fs.rm() with options { recursive: true, force: true }.
}
