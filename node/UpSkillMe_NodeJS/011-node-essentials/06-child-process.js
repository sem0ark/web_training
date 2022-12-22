/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.22
 * 
 * Node has a module which allows us to spawn and execute child processed, so run some external functionality
 * 
 * Further reading:
 * 1. Node.js Child Processes: https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/
 * 2. How to Use Buffers in Node.js: https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/#:~:text=What%20Are%20Buffers%3F,methods%20specifically%20for%20binary%20data
 * 
 * */

function main_exec() {
  const cp = require("child_process");
  cp.exec("echo Hello!");
  cp.exec("dir", (err, data, stderr) => {
    if (err) throw err;
    console.log(data);
    console.log(stderr);
  });

  cp.exec("node ./05-streams.js", (err, data, stderr) => {
    // So like that we can run other commands, even other node instances
    if (err) throw err;

    console.log(data);
  });

  // .exec() function is created for the synchronous running
}

// main_exec();


function main_spawn() {
  // .spawn() is a fucntion that handles the non-blocking runnnig of exeternal functionality
  // EX: long processes
  //     processes that require an input
  // So we don't want to execute the process, we want to spawn it

  const cp = require("child_process");
  const questionApp = cp.spawn("node", ["./02-core-modules.js"]);

  questionApp.stdin.write("Alex\n"); // here we emulate someone entering the data
  questionApp.stdin.write("Tahoe\n"); // so the programs runs very fast
  questionApp.stdin.write("Change the world\n");

  questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
  });

  questionApp.on("close", () => {
    console.log(`questionApp porocess exited`);
  });
}

main_spawn();