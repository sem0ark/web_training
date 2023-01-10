/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.27
 * 
 * Express is a library for efficient creation and usage of the http servers.
 * 
 * In the course would be used files as a website that should be controlled on the server ot make it more dinamic.
 * 
 * */

const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, './src/static')));
// Here we use middleware type static,
//    so express would look for required files

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/static/index.html'))
  // But there would be a problem, because any images wouldn't be displayed
  //   the page couldn't loa the files.
  // To run it we need static.
});


app.get('/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, './src/static/speakers.html'))
});

app.listen(PORT, () => {
  console.log(`Express server iss listenning on PORT ${PORT}`);
});
