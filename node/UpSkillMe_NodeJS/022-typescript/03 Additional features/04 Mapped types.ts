// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-25

// - [Basics of Mapped Types](https://www.domysee.com/blogposts/ts-mapped-types)
// - [Mapped Type examples](https://medium.com/javascript-everyday/mapped-types-in-typescript-6be8a0dd532c)
// - [Recommended: TS Mapped types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

// We can use mapped types as list comprehensions in Python, where we can more quickly create new types
// Overall, we can use these mapped types in the same way as objects or comprehensions in Python to quickly create some types and restrictions to them

(() => {
  interface Warrior {
    name: string;
    weapon: string;
    strength: number;
  }

  type OptionalValues<T> = {
    // make the T's properties optional
    [P in keyof T]?: T[P];
  };

  type ReadOnlyValues<T> = {
    readonly [P in keyof T]: T[P];
  }; // make the T's properties readonly

  type MutableValues<T> = {
    -readonly [P in keyof T]: T[P];
  }; // make the T's properties mutable by deleting readonly property if it exists

  /// ===========================================

  type Samurai = OptionalValues<Warrior>;
  // type Samurai = {
  //   name?: string;
  //   weapon?: string;
  //   strength?: number;
  // }

  type Samurai2 = ReadOnlyValues<Warrior>;
  // type Samurai2 = {
  //   readonly name: string;
  //   readonly weapon: string;
  //   readonly strength: number;
  // }

  type Samurai3 = MutableValues<ReadOnlyValues<Warrior>>;
  // type Samurai3 = {
  //   name: string;
  //   weapon: string;
  //   strength: number;
  // }
})();
