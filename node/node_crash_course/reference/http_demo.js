const http = require('http');

// create a server object
http.createServer((req, res) => {
    // write response
    res.write('Helo World!');
    res.end()
}).listen(5000, () => console.log('Server running'));