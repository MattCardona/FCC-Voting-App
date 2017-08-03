const express = require('express');
const hbs = require('hbs');

var app = express();
var port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send("Hello Claries");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});