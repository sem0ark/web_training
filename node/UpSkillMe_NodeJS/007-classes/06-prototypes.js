
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
    this.type = 'floral';
    this.storage = 'cool';
    this.vase = vase;
    this.name = name;
    this.quantity = quantity;
    this.logItem = function () {
      console.log('%c' + this.name, 'font-weight:bold');
      for (let prop in this) {
        console.log(' ', prop, ': ', this[prop]);
      }
    }
  }

  function Live(name, pot, quality = 1) {
    this.type = 'floral';
    this.storage = 'cool';
    this.pot = pot;
    this.name = name;
    this.quantity = quantity;
    this.logItem = function () {
      console.log('%c' + this.name, 'font-weight:bold');
      for (let prop in this) {
        console.log(' ', prop, ': ', this[prop]);
      }
    }
  }

  function Bouquet(name, vase, quality = 1) {
    this.type = 'floral';
    this.storage = 'cool';
    this.vase = vase;
    this.name = name;
    this.logItem = function () {
      console.log('%c' + this.name, 'font-weight:bold');
      for (let prop in this) {
        console.log(' ', prop, ': ', this[prop]);
      }
    }
    this.flowers = {
      addStem: function (name, quantity = 1, color = 'Default') {
        this[name] = new Flower(quantity, color);
      }
    }
  }

  function Flower(quantity, color) {
    this[color] = quantity;
    this.logItem = function () {
      console.log('%c' + this.name, 'font-weight:bold');
      for (let prop in this) {
        console.log(' ', prop, ': ', this[prop]);
      }
    }
  }
}

// If we create similar, but a lot of objects, we can use constructors and even create cutom ones
// Name constructros with a capital letter.