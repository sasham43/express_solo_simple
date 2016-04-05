var express = require('express');
var app = express();
var port = 3000;

app.listen(port,function(){
  console.log('Server listening on port ' + port + '...');
});

app.get('/', function(req, res){
  console.log('Received GET request');
  res.send(' You made a GET request!');
});

app.post('/', function(req, res){
  console.log('Received a POST request');
  res.send('\n You made a POST request!\n\n');
});
