/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.20
 * 
 * Object literals:
 *    we can create object properties with the same name as
 *    the variable with the value we are passing to the object.
 *    so { name, surname }, automatically transforms into 
 *    { "name": name, "surname": surname }.
 *    With this feature we can elimenate unneeded code.
 * 
 * Spreading with objects:
 *    When spreading an object, spread operrator returns an array of
 *    key:value pairs.
 *    With feature we can quickly nest/merge objects.
 * 
 * Destructuring objects:
 *    We can get properties of objects just like with arrays.
 * 
 * Iterating:
 *  we can iterate through objects with for-of objects.
 * 
 * Further reading:
 * 1. New features of object literals: https://exploringjs.com/es6/ch_oop-besides-classes.html#sec_new-features-obj-literals
 * 2. Object.entries() and Object.values(): https://exploringjs.com/es2016-es2017/ch_object-entries-object-values.html
 * 3. Object.fromEntries(): https://exploringjs.com/es2018-es2019/ch_object-fromentries.html
 * 4. Rest/Spread Properties: https://exploringjs.com/es2018-es2019/ch_rest-spread-properties.html
 * */


function main_spreading() {
  // Spreading objects
  const daytime = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly",
  };

  const nighttime = "mac and cheese";

  const meals = {
    ...daytime,
    nighttime, // example of bobject literals
  };

  console.log(meals);
}

function main_destructuring() {
  // Destructuring
  const sandwich = {
    title: "Reuben",
    price: 6,
    description: "A classic",
    ingredients: [
      "bread",
      "corned beef",
      "dressing",
      "sauerkraut",
      "cheese",
    ]
  };

  const { title, price } = sandwich;

  const vacation = {
    destination: "Chile",
    travelers: 2,
    activity: "skiing",
    coss: "so much",
  };

  function matrketing({ destination, activity }) {
    return `Come to ${destination} and do some ${activity}`;
  }

  console.log(sandwich);
  console.log(title);
  console.log(price);
  console.log(matrketing(vacation));
}

function main_iterating() {
  for(let letter of "Java") {
    console.log(letter);
  }

  let topics = ["JS", "ES6", "Node"];

  for(let topic of topics) {
    console.log(topic);
  }

  let topics_2 = new Map();
  topics_2.set("HTML", "/topic/html");
  topics_2.set("CSS", "/topic/css");
  topics_2.set("Node", "/topic/node");

  for(let topic of topics_2)          { console.log(topic); } // iterating through items
  for(let topic of topics_2.keys())   { console.log(topic); } // iterating through keys
  for(let topic of topics_2.values()) { console.log(topic); } // iterating through values
}

main_iterating();