var express = require('express');
var app = express();
var path = require('path');
var url = require('url');

app.get('/about.html', (req, res) => {
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    res.sendFile(path.join(__dirname + "/about.html"));
});

app.get('/index.html', (req, res) => {
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000);