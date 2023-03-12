Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
Completed by Arkadii Semenov on 2023-03-12

### Introduction

TypeScript - superset of JS, it adds new features and syntax to JS.
It adds the concept of static typing for JS.

Dynamic vs. Static:

1. Great for web browser object model. Dynamic languages use duck typing (if it behaves like a duck, then it is a duck) and much more forgiving to the changes of types.
2. Great for maintainability and sustainability. Static typed languages force you to clearly specify what should do all the objects you use, we would be able to statically analyze the code without running it.

JS is now has much more functionality than it was first intended, so developers now think about its dynamic nature more as a curse.

TypeScript adds typing in JS and allows to more quickly analyze the code for errors. You don't always have to use typing, so it isn't really a constraint for coding. TypeScript is a transpiler that allows to use the latest ECMAScript standards, but allows to run the code anywhere.

#### How to try out TS?

Go to typescript playground and check the code examples here without installing anything.

Code example:

```typescript
function speak(value: string): string {
   // as we can see it adds some typing functionality
   // and code checking to the standard javascript
   document.write(value);
   return value;
}

let greeted = "World";
let greeting = "Hello, ";
let whatToSay: string = greeting + greeted;

speak(whatToSay);
```

### Installing TypeScript

You can use any text editor and the TS compiler.

> Further reading:
>
> 1. [Why TypeScript](https://basarat.gitbook.io/typescript/getting-started/why-typescript)
> 2. [The TypeScript Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

Installing TypeScript with CLI:

-  install the compiler: `npm install -g typescript`
-  use `tsc` TS compiler to compile files to JS
-  use something like lite-server or live-server to run your web pages without hitting refresh all the time

### Using TypeScript

We can compile the code on the fly with `tsc -w` command, which would automatically compile the files in directory + watch for later changes.

We can also add the `tsconfig.json` file for configuring the typescript compiler.

### Types in TS

ECMAScript types:

-  immutable
   -  number
   -  string
   -  boolean
   -  null / undefined
-  all other
   -  object -> lists of key-value pairs

JS uses prototypal inheritance to specify the shared data and methods for objects.
