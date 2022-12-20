/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.20
 * 
 * Template strings: added in ES6
 * 1. we can encode variable values straight into strings with some additional formatting features
 *    It is denoted with `Text ${variable or an expression}`
 * 
 * Searching strings:
 * 1. Used for advanced searching.
 * */
function main_templates() {
  function print(name) {
    console.log(`Hello, ${name}!`);
  }
  print("Isabelle");
  print("Janny");
  
  function createEmail(firstName, price) {
    let shipping = 5.95;
    console.log(`Hi ${firstName}! Thanks!
    Total: $${price}
    Shipping: $${shipping}
    Grand Total: $${price + shipping}
    `);
  }
  createEmail("Sara", 6.00);
}

function main_searching() {
  const planet = "Earth";
  
  console.log("starts with 'Ear': ", planet.startsWith("Ear"));
  console.log("starts with 'ear': ", planet.startsWith("ear"));

  console.log("includes 'h': ", planet.includes("h"));
  console.log("includes 'sar': ", planet.includes("sar"));

  console.log("The index of 'art' in Earth is: ", planet.search("art"));
}

function main_repeat() {
  let yell = "woo!";
  let party = yell.repeat(20);

  console.log(party);

  let cat = {
    meow(times)  { console.log("Meow".repeat(times)); },
    purr(times)  { console.log("Prrr".repeat(times)); },
    snore(times) { console.log("Zzzz".repeat(times)); },
  }

  cat.meow(10);
  cat.purr(10);
  cat.snore(10);

}

main_repeat()