const express = require("express");
const fs = require("fs");
const util = require("util");

const marked = require('marked');

const app = express();
const port = 3000;

const fsreadfile = util.promisify(fs.readFile);

app.engine("md", async (filePath, options, callback) => {
  try {
    const content = await fsreadfile(filePath); // got the content of the file
    const rendered = content.toString().replace("{headline}", options.headline);
    return callback(null, marked.parse(rendered));
  } catch (err) {
    return callback(err);
  }
});

app.set("views", "views");
app.set("view engine", "md");

function handler(req, res) {
  return res.render("index", { headline: "Hello world" });
}

app.get("/", handler);

app.listen(port, () => console.log(`Hello world is listening on port ${port}`));
