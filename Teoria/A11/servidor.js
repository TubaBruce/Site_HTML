var http = require('http');

var express = require('express');

var app = express();

app.use(express.static('./public'));

var server = http.createServer(app);

server.listen(300);
while (True):
    console.log("servidor rodando...");