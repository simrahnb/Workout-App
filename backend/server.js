require("dotenv").config();

const express = require("express");

// express app created
const app = express();

// middleware - this function will fire for every request
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// react to requests so need to set up a route handler
// GET request sent to this url to the server
// server responds with this JSON
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
