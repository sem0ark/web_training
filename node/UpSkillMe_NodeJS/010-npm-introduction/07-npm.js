/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.20
 * 
 * NPM == Node Package Manager
 * It is used to manage and install node mosules.
 * npm is preinstalled with Node.js.
 * 
 * package.json file
 * - the main file for the npm project.
 * - it contains the list of dependencies.
 * - it contains information about who created the project and when.
 * 
 * The site of npm contains more than 1000 packages, so we can you a lot of precreated functionality.
 * 
 * ### Basic Commands
 * 
 * 1. npm init - initialize package.json file in the repository
 *                Be careful with the name of the package, if you would post it on npm, then it would be seen to everyone.
 * 2. npm install [-g] [package name/s]
 *      - install the specifeid package with npm
 *      - we can install package locally (only in the project folder)
 *        or globally (to the system folder, so you can access it)
 *    Example: npm install express
 *    After running you would find
 *        node-modules - files for the moduled
 *        package-lock.json - list of all libraries
 *        in packckage.json "dependencies": {"express": "version"}
 * 
 *    Installing dev dependencies (utilities you would use only for development):
 *    - npm install [package/s] --save-dev
 *    They wouldn't be included into production.
 * 
 * 3. installing globally
 *    if you are installing somethign globally the files for teh modules would be saved to:
 *    - Windows >= 7: %AppData%\npm\node_modules
 *    - Unix-based: /usr/local/lib/(node_moduels OR node)
 *    Example: npm install -g [package/s]
 * 
 * 4. npm install eslint@[version] - installing a specific version of the package
 * 5. npm outdated [-g] - shows the list of packages to be updated in locally/globally
 * 6. npm update/install [package name/s]
 *    - updating packages, better use just install
 * 7. Note!:  npm i === npm install
 * 8. npm uninstall
 * 
 * Versioning:
 * Ex: 1.4.2
 *     [magor_release_number].[minor_release_number].[patch_release_number]
 * Ex: "^1.x.x" - all minor releases and patched OK
 *     "~1.5.x" - all oatches only
 *     "1.4.5"  - only this specific version
 * 
 * Package lock file:
 * - package-lock.json
 *    - the whole list of installed packadges installed on this project
 *    - node checks the list for finding any possible errors after updating/installing some additional packages
 * - package.json - only the "input" for npm.
 * 
 * ### NPM cache
 * 
 * If some package is not working, just try to clear your cache.
 * 
 * 1. npm cache verify
 *    - runs the report which checks the cache in npm
 * 2. npm cache clean --force
 *    - forcibly cleans the cache in your npm
 * 
 * ### NPM Audit
 * Only for npm version >= 6.0.0
 * It shows us the list of possible security vulnerabilities.
 * Possible errors:
 * - Severe - package can break your code
 * - High   - someone can break your code
 * - Low    - minor errors
 * 
 * run npm install on the error marked packages
 * 
 * 
 * ### Scripting in NPM file
 * npm-scripts, check https://docs.npmjs.com/cli/v9/using-npm/scripts
 * 
 * We can add commands to the package.json. (Added start command to the list of scripts).
 * It is a list of aliases/simple programs for running our code.
 * 
 * ### NPM npx
 * Some of npm packages are only for creating the project.
 * npx - is the solution to the repo pollution of this problem.
 * WE need to start teh project going without installing everything.
 * 
 * Example:
 * npx -p @angular/cli ng new myapp // here we run the command from the package we haven't installed using the npx
 * npx cowsay hello
 * 
 * ### Alternatives of NPM
 * 1. yarn - mostly the same as npm yarn.pkg.com, usually faster, but you need to install a package manager
 * 2. ni   - more short then yarn or npm, has its own approach
 * 
 * 
 * Further reading:
 * 1. "Exploring ES6. Upgrade to the next version of JavaScript" :https://exploringjs.com/es6.html
 * 2. "Exploring ES2016 and ES2017":https://exploringjs.com/es2016-es2017.html
 * 3. "Exploring ES2018 and ES2019":https://exploringjs.com/es2018-es2019/index.html
 * */

