const express = require("express");
const { type } = require("express/lib/response");
const jwt = require("jsonwebtoken");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  res.json({ msg: "Welcome to API" });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', { expiresIn: '2m' }, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        msg: "Post created",
        authData
      });
    }
  });
  res.json({
    msg: "Post created...",
  });
});

app.post("/api/login", (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: "Brad",
    email: "brad@gmail.com",
  };

  jwt.sign({ user }, "secretkey", (err, token) => {
    res.json({
      token,
    });
  });
});

// FORMAT OF TOKEN
// Authorization

function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  
  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // get token from array
    const bearerToken = bearer[1];
    // set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}
