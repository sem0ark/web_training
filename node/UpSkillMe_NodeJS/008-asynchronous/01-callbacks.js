
/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.17
 * 
 * Sychrounous program flow:
 * 1. One statement at a time
 * 2. STatements are executed in order
 * 3. It is also called "Blocking", because the next statement is blocked from execution util the previous one is executed
 * 
 * Asynchronous program flow:
 * 1. Multiple statements at once
 * 2. Statements executed simultaneously
 * 3. Non-blocking
 * 
 * JS has a single thread, but it has the mechanism for moving throug the remaining.
 * It is used with something like AJAX -> it is default to asynch
 * */

const fs = require('fs');
const key = fs.readFileSync('./008-asynchronous/key.txt', 'utf8');

