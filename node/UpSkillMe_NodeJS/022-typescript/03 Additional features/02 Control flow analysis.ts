// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-25

// Further reading:
// - [readonly modifier 1](https://basarat.gitbook.io/typescript/type-system/readonly#readonly)
// - [readonly modifier 2](https://basarat.gitbook.io/typescript/type-system/readonly#difference-from-const)

(() => {
  let value: string | number;
  // we can add different types to the value
  // and check that it stays on that type, else we would get an error

  console.log(typeof value);
  value = 0;
  console.log(typeof value);
  value = "string";
  console.log(typeof value);

  interface Creature {
    readonly height: number; // we can use readonly modifier to prevent changing the value in our code
    readonly width: number; // TS would statically check in case of such errors and warn you
    // NB! it would still compile!
  }

  let fish: Creature = { height: 100, width: 50 };
  console.log(fish);
  // fish.height = 200; - gives an error
})();
