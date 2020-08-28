const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const app = express();
const routes = require("./routes/index");


app.get('/', function (req: any, res: any) {
  res.send('welcome!');
});

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});

// use the body parser middleware to allow express to recognize json requests
app.use(bodyParser.json());

app.use("/routes", routes);