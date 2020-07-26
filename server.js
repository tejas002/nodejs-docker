const express = require("express");
const morgan = require('morgan');
const app = express();

app.use(morgan('combined'));
app.use(express.static('public'));

//setting the port
const port = process.env.PORT || 3001;

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));


let server = app.listen(port, function(){
    let port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
