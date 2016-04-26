/**
 * Created by yangliu on 4/25/16.
 */
// Required Modules
var express    = require("express");
var morgan     = require("morgan");
var path = require('path');
var app        = express();

var port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.static("./"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, './', 'app.html'));
});

// Start Server
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});