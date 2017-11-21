//Server side for Mego by Rubin Huang and Sehwan Park

var app = require('express')();
var express = require('express');
var http = require('http').Server(app);

var httpPort = 3000;

http.listen(httpPort, function(){
    console.log("");
    console.log("---------------| Server is  |-----------------");
    console.log("");
    console.log("Service server open on :" + httpPort);
});

// Add headers
app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', "*")
    next();
});

app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendfile('public/index.html');
});