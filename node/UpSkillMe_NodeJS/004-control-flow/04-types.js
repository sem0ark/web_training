/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.13
 * 
 * JS offers typeof operator for type checking
 * for checkong objects we can also use object.hasOwnProperty
 * 
 * For proper type checking
 * - library low dash _
 * - TypeScript
 * */

(() => {
  let num = "twelve";
  console.log(typeof num);
  
  num = 12;
  console.log(typeof num);
  console.log(typeof NaN);

  num = [1, 2];
  console.log(typeof num);
  if (typeof num === "object" && num.hasOwnProperty("length")) console.log("It is an array");
})();
