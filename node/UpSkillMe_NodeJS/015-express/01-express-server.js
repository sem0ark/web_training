/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.27
 * 
 * Express is a library for efficient creation and usage of the http servers.
 * 
 * In the course would be used files as a website that should be controlled on the server ot make it more dinamic.
 * 
 * Further reading:
 * 1. using template engines with Express https://expressjs.com/en/guide/using-template-engines.html
 * 
 * */

const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs'); // Here we tell express to use EJS
app.set('views', path.join(__dirname, './src/views')) // Here we tell the folders for templates


app.use(express.static(path.join(__dirname, './src/static')));
// Here we use middleware type static,
//    so express would look for required files

app.get('/', (req, res) => {
  // ------------------------- static rendering
  // res.sendFile(path.join(__dirname, './src/static/index.html'))
  // But there would be a problem, because any images wouldn't be displayed
  //   the page couldn't loa the files.
  // To run it we need static.

  // ------------------------- render with EJS
  res.render('pages/index', { pageTitle: 'Welcome' });

});


app.get('/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, './src/static/speakers.html'))
});

app.listen(PORT, () => {
  console.log(`Express server is listenning on PORT ${PORT}`);
});



/**
 * we can use template engines to create dinamic and responsive websites 
 * The engine get templates and some data and combines it into the standard HTML file
 *    So we can create website from the components without any repetitions at all.
 * 
 * In this course we would use EJS template engine
 * 
 * ### Installing
 * install with
 * `npm install ejs`
 * 
 * ### Tags
 * Tags used in the templates:
 * 
 * <%  -> 'Scriptlet' tag, for control-flow, no output
 * <%_ -> ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
 * <%= -> Outputs the value into the template (HTML escaped)
 * <%- -> Outputs the unescaped value into the template -> HTML inside a variable
 * <%# -> Comment tag, no execution, no output
 * <%% -> Outputs a literal '<%'
 * %>  -> Plain ending tag
 * -%> -> Trim-mode ('newline slurp') tag, trims following newline
 * _%> -> ‘Whitespace Slurping’ ending tag, removes all whitespace after it
 * 
 * Including templates:
 * Includes are relative to the template with the include call.
 * 
 * (This requires the 'filename' option.)
 * For example if you have "./views/users.ejs" and "./views/user/show.ejs" you would use
 * <%- include('user/show'); %>.
 * 
 * You'll likely want to use the raw output tag (<%-)
 * with your include to avoid double-escaping the HTML output.
 * 
 */