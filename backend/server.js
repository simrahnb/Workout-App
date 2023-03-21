require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts.js");

// express app created
const app = express();

// middleware - this function will fire for every request
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
}); 

// react to requests so need to set up a route handler
// GET request sent to this url to the server
// server responds with this JSON
// routes
app.use('/api/workouts', workoutRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
