// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-25

// Further reading:
// - [Discriminated Unions](https://basarat.gitbook.io/typescript/type-system/discriminated-unions#discriminated-union)

(() => {
  let nullVar1: null;
  let nullVar2: undefined;

  interface Archer {
    kind: "archer";
    lastName: string;
  }

  interface Samurai {
    kind: "samurai";
    lastName: string;
  }

  interface Magician {
    kind: "magician";
    lastName: string;
  }

  type WarriorChoice = Archer | Samurai | Magician;
  // we define what interfaces we can use for that type
  // If you have a class with a literal member then you can use that property to discriminate between union members.

  function selectWarrior(warrior: WarriorChoice) {
    return `Our warrior is ${warrior.kind}`;
  }

  console.log(nullVar1);
  console.log(nullVar2);
})();
