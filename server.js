const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9000;
const cardRouter = require('./routes/card');
const app = express();

let db = require('./models');
let card = db.Card;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json({
  extended: true
}));

app.use('/api/card', cardRouter);

app.listen(PORT, function() {
  console.log('Server started on PORT', PORT);
});