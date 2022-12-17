
/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.15
 * 
 * Further reading:
 * 1. Prototypal inheritance: https://javascript.info/prototype-inheritance
 * 2. F.prototype: https://javascript.info/function-prototype
 * 
 * */

dataObject = {
  itemname: '',
  category: '',
  vasetype: '',
  pottype: '',
  qty: '',
}

function main_flowers() {
  if (dataObject.category === 'arrangement') {
    // newItem = {
    //   type: 'floral',
    //   storage: 'cool',
    //   name: dataObject.itemname,
    //   vase: dataObject.vasetype,
    //   quantity: dataObject.qty,
    //   logItem: function() {
    //     console.log('%c' + this.name, 'font-weight:bold');
    //     for(let prop in this) {
    //       console.log(' ', prop, ': ', this[prop]);
    //     }
    //   }
    // }
    newItem = new Arrangement(dataObject.itemname, dataObject.vasetype, dataObject.qty);
  } else if (dataObject.category === 'live') {
    // newItem = {
    //   type: 'floral',
    //   storage: 'warm',
    //   name: dataObject.itemname,
    //   pot: dataObject.pottype,
    //   quantity: dataObject.qty,
    //   logItem: function() {
    //     console.log('%c' + this.name, 'font-weight:bold');
    //     for(let prop in this) {
    //       console.log(' ', prop, ': ', this[prop]);
    //     }
    //   }
    // }
    newItem = new Live(dataObject.itemname, dataObject.pottype, dataObject.qty);
  } else if (dataObject.category === 'bouquet') {
    // newItem = {
    //   type: 'floral',
    //   storage: 'warm',
    //   name: dataObject.itemname,
    //   vase: dataObject.vasetype,
    //   flowers: {},
    //   logItem: function() {
    //     console.log('%c' + this.name, 'font-weight:bold');
    //     for(let prop in this) {
    //       console.log(' ', prop, ': ', this[prop]);
    //     }
    //   }
    // }
    newItem = new Bouquet(dataObject.itemname, dataObject.vasetype);
    if (dataObject['color' + stemType] !== '---')
      newItem.flowers.addStem(key, dataObject[item], dataObject['color' + stemType]);
    else newItem.flowers.addStem(key, dataObject[item]);
  }

  function Arrangement(name, vase, quality = 1) {
    this.vase = vase;
    this.name = name;
    this.quantity = quantity;
    
  }
  Arrangement.prototype.type = 'floral';
  Arrangement.prototype.storage = 'cool';
  Arrangement.prototype.logItem = function () {
    console.log('%c' + this.name, 'font-weight:bold');
    for (let prop in this) {
      console.log(' ', prop, ': ', this[prop]);
    }
  }

  function Live(name, pot, quality = 1) {
    this.pot = pot;
    this.name = name;
    this.quantity = quantity;
  }
  Live.prototype.type = 'floral';
  Live.prototype.storage = 'warm';
  Live.prototype.logItem = function () {
    console.log('%c' + this.name, 'font-weight:bold');
    for (let prop in this) {
      console.log(' ', prop, ': ', this[prop]);
    }
  }


  function Bouquet(name, vase, quality = 1) {
    this.vase = vase;
    this.name = name;
  }
  Bouquet.prototype.type = 'floral';
  Bouquet.prototype.storage = 'cool';
  Bouquet.prototype.logItem = function () {
    console.log('%c' + this.name, 'font-weight:bold');
    for (let prop in this) {
      console.log(' ', prop, ': ', this[prop]);
    }
  }
  Bouquet.prototype.flowers = {
    addStem: function (name, quantity = 1, color = 'Default') {
      this[name] = new Flower(quantity, color);
    }
  }

  function Flower(quantity, color) {
    this[color] = quantity;
  }
  Flower.prototype.logItem = function () {
    console.log('%c' + this.name, 'font-weight:bold');
    for (let prop in this) {
      console.log(' ', prop, ': ', this[prop]);
    }
  }

  // If we create similar, but a lot of objects, we can use constructors and even create cutom ones
  // Name constructros with a capital letter.
}

function main_proto() {
  // Prototypes are used to save data and create programs more efficient
  // Prototypes can collect and store common properties of a set of objects (seuch as methods)
  // We can even use prototypes as a "Parent object", so inheritants would use it as a reference for common properties 

  // We create constructor function that gets changing properties to the object
  
  let Name = function (value1, value2) {
    this.key1 = value1;
    this.key2 = value2;
  }

  Name.prototype.key3 = "key3_value";
  Name.prototype.key4 = "key4_value";


  my_name = new Name("key1_value", "key2_value");

  console.log(my_name, my_name.__proto__);

  // Identify which keys and values are common to all objects constructed by a given constructor
  // Assign those properties and methods to the prototype of the constructor!
}

main_proto();
