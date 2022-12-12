/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.11
 * */

(() => {
  var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    0,
  ];

  // console.log(days);
  
  // Actually Array is an Object in JS, so it warks mostly in the same way
  // Arrays can contain multiple types and even objects + arrays too
  // Arrays know how many thing are in them
  
  // console.log(days.length);

  console.log(days[0]); // Indexing from 0
  console.log(days[2]); // days sub 2
  days[7] = 'Venueday'; // change values

  days[days.length] = "Merrimack"; // add to the end of teh array
  days.push("Coos"); // add to the end of teh array
  console.log(days.pop());
  // take item from the end of array

  days.shift('Day'); // place at the front
  console.log(days.unshift()); // take form the front

  delete days[7]; // removes value at the index
  days.splice(7, 1); // removes values with the indexes, items are sgifted
  // from where, how many
})();


// Embrace the use of whitespaces for the readability purposes
// Use comments to create a documentation and diable parts of code:
// block comments and line comments
