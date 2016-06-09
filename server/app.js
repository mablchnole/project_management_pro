var express = require('express');
var app = express();
var path = require('path');
var createEmp = require('../modules/create_emp');

// var bodyParser = ('body-parser');
// var urlencodedParser = bodyParser.urlencoded({extended:false});



// set up server
var server = app.listen(8080, 'localhost', function(){
  // sniff out port on which server is running
  var port = server.address().port;
  console.log('server is on ' + port);
});
app.get('/createEmp', function(req, res){
  var test = createEmp();
  res.write(test);
  res.end();
   //console.log(test);
});
