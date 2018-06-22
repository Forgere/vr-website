var express = require("express");
var app = express();
app.use("/",express.static(__dirname + "/home"));
app.use("/proj",express.static(__dirname + "/proj"));
app.listen(3000);