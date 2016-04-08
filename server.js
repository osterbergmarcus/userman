var express = require('express');
var path = require('path');
var config = require('./webpack.config.js');
var webpack = require('webpack');

var app = express();

var compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static('./static/dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});