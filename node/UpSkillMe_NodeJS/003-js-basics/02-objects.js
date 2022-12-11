/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.11
 * 
 * Objects:
 * - We can use them as a more complex type of data
 * - 
 * 
 * */

(() => {
  var my_object = {
    'label': 'value',
    'label2': 'value2',
  };

  // console.log(my_object);
  
  // We can use objects to efficiently model different types of data
  // - objects can have similar keys, but different values
  
  console.log(my_object.label);
  console.log(my_object["label"]); // it's used when kays contain spaces
  // we can use dot notation/keys to acess to the values of the object
  
  my_object.color = 'black';
  my_object.label2 = 'value-2';
  delete my_object.label;
  // we can create/delete values and change already created

  // NB! use camelCase for naming properties and functions
  /**
   * Jargon:
   * - objects are passed by reference,
   *   so be careful with assigning objects to variables
   *   -> so the program creates a reference to teh same value
   * - we need to explicitly copy objects
   * */
  
  label2 = JSON.parse(JSON.stringify(label));
  // !Creates a deep copy of the object safely!
})();
