// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-25

// - [Type guards](https://basarat.gitbook.io/typescript/type-system/typeguard)

(() => {
  interface A {
    x: number;
    a: number;
  }

  interface B {
    y: number;
    b: number;
  }

  function apply(q: A | B) {
    if ("x" in q) {
      // TS understands that we are using type A
      console.log(q.a);
    } else if ("y" in q) {
      // TS understands that we are using type B
      console.log(q.b);
    }
  }
})();
