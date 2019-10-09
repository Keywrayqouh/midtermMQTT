var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var port = process.env.PORT || 8000;


app.use(express.static(path.resolve(__dirname,"public")));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


app.listen(port, function(){
    console.log('listening on *:' + port);
  });
  