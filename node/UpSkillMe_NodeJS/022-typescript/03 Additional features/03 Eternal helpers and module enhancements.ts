// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-25

`
{
  "compilerOptions": {
    "sourceMap": true,
    // Enables the generation of sourcemap files.
    // These files allow debuggers and other tools to display
    //    the original TypeScript source code when actually working with the emitted JavaScript files.
    // Source map files are emitted as .js.map (or .jsx.map) files next
    //    to the corresponding .js output file.

    "baseUrl": "./node_modules", // where would be main library files you want to compile with

    "paths": { // any additional files you would import in your project
      "jquery": ["jquery/dist/jquery.min.js"]
      // it works as alias: you import "jquery" and compiler imports the list of paths for "jquery"
    }
  },
  "include": [ // add to the build when compiling
    "src/**/*"
  ],
  "exclude": [ // use, but don't include to the build when compiling
    "node_modules"
  ]
}
`;

// Also you can use `tslib` library to add the functionality such as extends for your projects

// export default class Test extends Component {} // if you use react in your app
