/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.13
 * 
 * Loops, sequential loops
 * for(init counter; condition to run; increment) {
 *    CODE, body of the loop
 * }
 * 
 * enumerative for loops
 * !!!! NB! the order may be messed up !!!!
 * for(var in object) { // enumerates on keys
 *  CODE
 * }
 * 
 * While loops, if you don't know how many times you would iterate
 * while(condition) {
 *  CODE
 * }
 * NB! there is a possibility to create an infinite loop, so the program won't stop
 * 
 * do while would run at least once!
 * 
 * do {
 *  CODE
 * } while(condition);
 * */

(() => {
  for(let i=0; i < 10; i++) {
    console.log("i = ", i);
  }

  let animals = [
    "cat",
    "dog",
    "whale",
    "shark",
    "snake"
  ];

  let obj = {
    first: "Home",
    second: "Test",
    third: "Task",

  }

  let cur = "dog";
  // for(let i=0; i<animals.length; i++) {
  //   if(cur === animals[i]) {
  //     console.log("It IS     a", animals[i]);
  //   } else {
  //     console.log("It is not a", animals[i]);
  //   }
  // }

  for(let i in animals) {
    if(cur === animals[i]) {
      console.log("It IS     a", animals[i]);
    } else {
      console.log("It is not a", animals[i]);
    }
  }
  // While loops
  let i = 1;
  while(i < 3) {
    i += 1
    console.log(i);
  }

  do {
    i -= 1
  } while (i > 0);
})();

// Further reading https://javascript.info/while-for