/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.25
 * 
 * 
 * 
 * */


const { createServer } = require('http');
const { stat, createReadStream, createWriteStream } = require('fs');
const { promisify } = require('util');

const fileName = '../013-streams/powder-day.mp4'

const fileInfo = promisify(stat); // we use it to convert to a Promise


const respondeWithVideo = async (req, res) => {
  const { size } = await fileInfo(fileName);
  const range = req.headers.range;
  if (range) {
    let [start, end] = range.replace(/bytes=/, '').split('-');
    start = parseInt(start, 10);
    end   = end ? parseInt(end, 10) : size-1;
    res.writeHead(206, { 'Content-Type': 'video/mp4', 'Content-Length': (end - start) + 1, 'Content-Range': `bytes ${start}-${end}/${size}`, 'Accept-Range': 'bytes' });
    createReadStream(fileName, { start , end }).pipe(res);
  } else {
    res.writeHead(200,{ 'Content-Type': 'video/mp4', 'Content-Length': size});
    createReadStream(fileName).pipe(res);
  }
}

function main_server() {
  createServer((req, res) => {
    // We should be able to handle multiple requests.
    // We can understand it by reading the URL of the request
    if (req.method === "POST") { // we are checking if we are getting the response
      req.pipe(res);
      req.pipe(process.stdout);
      req.pipe(createWriteStream('./dummy.txt'));
      // Here we are sending the data we got from the "user" to some other places,
      // because it also is a Stream

      // When we are getting data from the multyform we are getting the data + some additional information in the same stream
      // So we need to somehow get the information from it
    } else if (req.url === '/video') {
      respondeWithVideo(req, res);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html', });
      res.end(`
      <form enctype="multipart/form-data" method="POST" action="/">
        <input type="file" name="upload-file" />
        <button>Upload File</button>
      </form>
      `); // so we are resposing with the HTML text in either way
    }
  }).listen(3000, () => console.log('server running - 3000'));
}

main_server();
