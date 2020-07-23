const express = require("express");
const morgan = require('morgan');
var app = express();

app.use(morgan('combined'));
app.use(express.static('public'));

//setting the port
const port = process.env.PORT || 3001;

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));



var server = app.listen(port, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});