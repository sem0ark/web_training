  
Links:
- [Previous](02%20Testing%20frameworks,%20TDD%20and%20BDD.md)
- [Next](04%20Unit%20testing.md)

Tags: #notes/web/epam/upskillme #sci/pro/dev/testing #sci/pro/practices

Date: [20230218](../../../../200%20Diary/205%20Day/20230218.md)
Time: 19:24:14
_____

Notes on the course Node.js Testing and code quality from EPAM UpSkillMe program
Completed by Arkadii Semenov on 2023-02-19

Chapter goals:

1. Standardize editors
2. Compare linters
3. Create and extend configuration
4. Cleaning code with linter

## EditorConfig standardization

How to maintain coding standards in multiple editors? -> **EditorConfig standardization** (editorconfig.org)

It is the system to define and maintain consistent coding styles

1. File format -> defines coding styles
2. Text editor plugin
   - Reads file format
   - Adheres to styles

Why to use?

- Standardization to improve code quality
- readable file format and self-documenting
- Free and OpSS industry standard
- Flexible and configurable

```editorconfig
# file '.editorconfig'
root = true

# the file is in the root folder,
# it is the top-most Editor Config file

[*] # for all files define:
indent_style = space # what to use as indent
indent_size = 2 # single-spaced character
# tab_width = 2 # if you are using tabs, defaults to indent_size

end_of_line = LF
# LF - Unix / Linux - usual
# CRLF - DOS and Windows
# CR - Mac

charset = utf-8 # which encoding to use, recommended utf-8

trim_trailing_whitespace = true
insert_final_newline = true

[*.md] # later, for all .md files define:
trim_trailing_whitespace = false
```

File extension features:

- in INI format -> easy to use
- all properties and values are case-insensitive
- properties can be omitted

#### Formatting:

Section names:
`[filepath]` - matches the filepath, filepath globs.
EX: `[*.md]` - matches all md files

- `*` - all chars
- `**` - all chars, including path
- `{name1,name2}` - match either name

EX: `[{lib,src,test}/**.js]` - match all JS files within `lib`, `src` and `test` directories.

> - NB! - un Unix text files, every line must end with newline!
> - if doesn't end with newline - it is not a text file
> - can cause bugs in some systems

> **Further reading**:
>
> 1. [EditorConfig](https://editorconfig.org/)

#### Installing

EditorConfig:

After installing add notice to the readme, like:
"This project uses editorconfig to standardize text editor configuration visit https://editorconfig.org for details."

- Download editorconfig plugin to VS Code
- paste data to the

## Linters for JS

There are a whole bunch of different linters:

1. Node.js native, EX: `node --check script.js`
   - checks for syntax errors in single target file
   - doesn't scale to a project
2. JSLint, JSHint, ESLint
   - JS syntax checkers and validators
   - All support ES6
   - All free and OpSS
3. **ESLint** - recommended
   - Many rules including style
   - flexible rule configuration
   - some rules have additional settings
   - configuration file to use with projects
   - lots of documentation
   - Extensible with plugins
   - Can automatically fix some errors

prettier.io:

- opinionated code formatter
- automatically reformats your code
- it is **not** a linter!
- can be used with eslint

> Further reading:
>
> 1. [Getting Started with ESLint](https://eslint.org/docs/user-guide/getting-started)

#### Installing

It is not recommended to install the linter globally because:

- Local not in sync with others!
- Different projects have different versions of the linter!
- Difficult to manage plugins

How to install locally:

- Add to development dependencies `npm install eslint -D`
- Execute with `npx eslint ./some/path/to_the_file.js`

Advices:

1. Need more ESLint configuration?
   - Use package.json scripts
   - EX: Add generation reports as part of CI build process
   - no separate task runner necessary for linting

#### Configuring ESLint

How to configure?

1. Configuring with a file:
   - Add file `.eslintrc.{js / json / yml}`
   - Add properties
2. JS comments to files
   - used for exceptions

> Further reading:
>
> - [Configuring ESLint](https://eslint.org/docs/user-guide/configuring/)
> - [List of Available Rules](https://eslint.org/docs/rules/)

ESLint configuration:

1. `parserOptions` -> JS language options
   - ecmaVersion (4, 5, 6, 7, ..., 12)
2. `sourceType` -> module / script (default)
3. `env` -> specify predefined global variables, EX:
   - `"browser": true`
   - `"node": false`
   - `"es2020": true`
   - `"jquery": false`
4. `rules` -> ESLint rules
   - grouped by category
   - "off" or 0 -> disable
   - "warn" or 1 -> warning, doesn't affect exit code
   - "error" or 2 -> set exit code

example:

```js
module.exports = {
  env: {
    node: true,
    es2020: true,
  },
  rules: {
    "no-empty": 2, // disallows empty blocks
    "no-multiple-empty-lines": 1,
    "no-var": 2, // don't use `var`
    "prefer-const": 2, // prefers the use of `const`
  },
};
```

## ESLint Shareable Configs

- It is a npm package that exports as ESLint config object.
  - It should begin with `eslint-config-`
- Can be published on npm to share
- Can be private
  Organizational standards

How to install it?

1. Add to dev dependencies
2. ESlint configuration property "extends" to your file:
   - `"extends": "eslint-config-myconfig"`
   - shorter `"extends": "myconfig"`
3. **Recommended**:
   - `"extends": "eslint:recommended"`
   - includes ES6 configuration and possible errors

Additional shareable configs:

- `eslint-config-airbnb` - Airbnb JS and react Style Guide
- `eslint-config-standard` - JS Standard Style
- `eslint-config-google` - Google JS Style Guide
- `github.com/dustinspecker/awesome-eslint` - list of additional configurations

#### Creating shareable config

- check the documentation
- it can extend another config (even multiple)
- start with existing shareable config, then customize
- use package.json peerDependencies -> extended configs and plugins
- use semantic versioning
- include readme with instructions and justifications

For private shareable configs:

1. Don't use git submodules -> use package manager
2. use git+ssh to add

#### Linting the entire codebase

1. Add recursive changes to the eslint configuration
   - in different folders to support different styles (for node.js, front-end, testing)
2. Exclude 3rd party code from linting use `.eslintignore`.

Goals of linting the project:

- Eliminate fatal errors
- Avoid trying to fix all errors at once
- Leave code better than you found it
- avoid using the feature on existing code bases
- Instead, manually execute commands

#### Challenge

1. Open folder
2. Create new NPM module `npm init -y`
3. Add config file to the index.js
4. Add peerDependencies "eslint": ">=7"
5. Add readme
6. Link module to the project `npm link eslint-config-nadia`
7. Add "extends": "nadia"
