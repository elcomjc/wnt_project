var express = require('express');
var path = require('path');
var open = require('open');
var compression = require('compression');
var favicon = require('serve-favicon');


const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static('public'));
app.use(favicon(path.join(__dirname,'src','assets','favicon.ico')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/bundle.js'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});