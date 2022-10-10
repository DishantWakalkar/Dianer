require("dotenv").config({ path: "./config.env" });
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(require("../server/routes/homeRoute"));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
const homeRoute = require("../server/routes/homeRoute");
const con = require("../server/models/dbcon");
app.use((req, res, next) => {
  res.send('Welcome to Express');
});

app.use("/getGrades/", homeRoute);
app.use("/getDevice/", homeRoute);
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
