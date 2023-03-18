// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-16

(() => {
  // We can use generics to create a multiple subtypes
  //   of the same function to handle different configurations of types

  // Also we can better specify the types of all the values in functions and classes

  function clone<T>(value: T): T {
    // now TS would see the return type
    let serialized: string = JSON.stringify(value);
    return JSON.parse(serialized);
  }

  // IF you notice that you type the same code over and over again
  //    while only changing types, it is a great possibility to use generics to reduce code duplications

  let arr_1: number[] = [1, 2, 3]; // as it works here
  let arr_2: Array<number> = [1, 2, 3]; // it also can be used like that

  class KeyValuePair<T, V> {
    constructor(public key: T, public value: V) {}
  }

  let p1 = new KeyValuePair<number, string>(1, "First");
  let p2 = new KeyValuePair<string, Date>("Second", new Date(Date.now()));
  let p3 = new KeyValuePair<number, string>(3, "Third");

  // we can use generics to initialize and use similar classes with full type support,
  //  because TS identifies the methods' return and input values

  class KeyValuePairPrinter<T, V> {
    constructor(private pairs: KeyValuePair<T, V>[]) {}

    print() {
      for (let p of this.pairs) {
        console.log(`${p.key}: ${p.value}`);
        // we have specified strict definition of types
        //  for all possible configurations
      }
    }
  }

  let printer = new KeyValuePairPrinter([p1, p3]);
  // using [p1, p2, p3] would result as an error, because p2 has <string, Date> type
  printer.print();

  // Applying generic constraints
  function totalLength<T extends { length: number }>(x: T, y: T) {
    // first -> we managed to specify that x and y have the same type (NB! or type compatible with T, like inherited types)
    // second -> we specify that we should use that function only with the length property

    let total: number = x.length + y.length;
    return total;
  }

  // NB! you can't refer to other generic modules in defining the generic
})();
