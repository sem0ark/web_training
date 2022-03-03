const os = require('os');

// Platform
console.log(os.platform());

// CPU arch
console.log(os.arch());

//cpu core info
console.log(os.cpus());

// get free memory
console.log(os.freemem());

// get total memory
console.log(os.totalmem());

// home dir
console.log(os.homedir());

// uptime
console.log(os.uptime());