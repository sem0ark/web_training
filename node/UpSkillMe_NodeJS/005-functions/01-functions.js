/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.13
 * 
 * function func_name(arguments...) {
 *  CODE
 *  ? return ...;
 * }
 * 
 * NB! objects in functions are passed by reference!
 * 
 * */

(() => {
  function fuddify(speech) {
    if(typeof speech !== "string") {
      console.error("Nice try wabbit!");
      return;
    }

    speech = speech.replace(/r/g, 'w');
    speech = speech.replace(/R/g, 'W');
    return speech;
  }

  function isEven(num) {
    return num % 2 === 0;
  }

  function speakSomething(what, howMany) {
    for (let i = 0; i < howMany; i++) {
      console.log(what, `{${i}}`);
    }
  }


  function addingMachine() {
    // we can use arguments array to get access to an infinite number of arguments for the function
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      if(typeof arguments[i] === "number") total += arguments[i];
    }
    return total;
  }

  function transform(animal) {
    if(typeof animal !== "object") {
      console.error(`Bad type for argument {animal}, considered {object}, got {${typeof animal}}`);
    }
    let randNum = Math.floor(Math.random() * 5);
    animal.form = [
      "A",
      "B",
      "C",
    ][randNum];
  }


  function transformCopy(animal) {
    if(typeof animal !== "object") {
      console.error(`Bad type for argument {animal}, considered {object}, got {${typeof animal}}`);
    }
    let randNum = Math.floor(Math.random() * 5);
    return {
      name : animal.name, 
      bestFriend : animal.bestFriend,
        form : [
        "A",
        "B",
        "C",
      ][randNum],
    }
  }

  console.log(fuddify("Where are you!?"));
  console.log(isEven(10));
  speakSomething('hey hey', 10);
  console.log(addingMachine(1, 2, 3, 4));


  // Funciotns are objects!
  // You can feed functions into other functions!
  let speak_2 = function(what) {console.log(what || "Something");}
  
  // Ex:
  setTimeout(speak_2, 5000);
  let obj_2 = {
    sayHello: function() {
      console.log("Hello!");
    }
  }

  obj_2.sayHello()
})();

// further reading
// https://javascript.info/function-basics
// https://javascript.info/function-expressions