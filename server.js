var express = require('express');
var path = require('path');

var app = express();
var port = 3000;

app.use(express.static('public'));

app.listen(port,function(){
  console.log('Server listening on port ' + port + '...');
});

app.get('/', function(req, res){
  console.log('Received GET request');
  //res.send('You made a GET request!');
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/', function(req, res){
  console.log('Received a POST request');
  res.send('\n You made a POST request!\n\n');
});
