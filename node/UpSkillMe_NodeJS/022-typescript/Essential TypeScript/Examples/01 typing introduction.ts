let test: string = "string"; // example of typing

let animal = {
  // there is en example of object literal
  // we can easily define the single objects
  name: "Fido",
  species: "Dog",
  age: calculateAge(2010),
  speak: function () {
    console.log("Woof!");
  },
};

// animal.age = "5"; // would yell at you if you tried to change the type

function makeAnimalSpeak(animal) {
  // example of usage of duck typing
  animal.speak();
}

function calculateAge(birthYear: number): number {
  // we can specify the types,
  //  but TS also can understand the
  return Date.now() - birthYear;
}

// even if we understand that it is a function that gets two arrays and returns the total length
// TS can't understand what to do with it, so it just gives up
// and places the most ambiguous type `any`
function totalLength(x, y) {
  let total = x.length + y.length;
  return total;
}

makeAnimalSpeak(animal);
