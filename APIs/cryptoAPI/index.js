var express = require("express");
var app = express();

var routes = require("./routes/routes");
routes(app);

exports.app = app;
