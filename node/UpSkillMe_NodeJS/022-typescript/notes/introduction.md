Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
Completed by Arkadii Semenov on 2023-03-12

> Further reading:
>
> 1. [Why TypeScript](https://basarat.gitbook.io/typescript/getting-started/why-typescript)
> 2. [The TypeScript Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
> 3. [TS Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
> 4. [TS interfaces](https://basarat.gitbook.io/typescript/type-system/interfaces)
> 5. [TS Classes 1](https://basarat.gitbook.io/typescript/future-javascript/classes)
> 6. [TS Classes 2](https://www.typescriptlang.org/docs/handbook/2/classes.html)

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

#### Advanced TS

> Further reading:
>
> 1. [Basic Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
> 2. [Generic use cases](https://rossbulat.medium.com/typescript-generics-explained-15c6493b510f)
> 3. [Generics](https://basarat.gitbook.io/typescript/type-system/generics)
> 4. [Understanding TypeScript Generics](https://www.smashingmagazine.com/2020/10/understanding-typescript-generics/)
> 5. [TS Modules](https://basarat.gitbook.io/typescript/project/modules)
> 6. [TS Namespaces](https://basarat.gitbook.io/typescript/project/namespaces)
> 7. [TS Namespaces 2](https://www.typescriptlang.org/docs/handbook/namespaces.html)

_External modules_ is a different way to do the same thing - encapsulate and manage data access
in _implicit modules_ approach we used namespaces to create a scope for data and control it
but in external modules we use file scope as our base
Internal VS External

-  Both encourage encapsulation and organization
-  Both require components to be exported
-  Both require components to be imported

-> Internal -> namespace - function scope
-> Internal -> - file scope

**NB!** don't forget to add "module" configuration to typescript config file.

> Further reading:
>
> 1. [File Module Details](https://basarat.gitbook.io/typescript/project/modules/external-modules)
> 2. [Namespaces and Modules](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html)

#### Module loaders

Why do we need module loaders?

There is still no specified standard support for modules in browsers
So, to run the application in a compatible way we use module loaders

Choosing a module loader:

-  There are many to choose from
-  TS generates code that is compatible with almost all of them

In the course used -> `System.js`:

-  because it attempts to implement the proposed ECMAScript specification
-  Provides a temp fix until native browser support is available
