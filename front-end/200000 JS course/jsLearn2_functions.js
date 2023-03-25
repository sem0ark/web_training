
// object initialisation
var person = {
 name: "John", age: 31, 
 favColor: "green", height: 183
};
// access
var x = person.age;
var y = person['age'];

// constructor
function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}

// creation
var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

// method creation
function person(name, age) {
  this.name = name;  
  this.age = age;
  this.changeName = function (name) {
    this.name = name;
  }
}

//it can use public functions
function bornYear() {
  return 2016 - this.age;
}
function person(name, age) {
  this.name= name;  
  this.age = age;
  this.yearOfBirth = bornYear;
}
