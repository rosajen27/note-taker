// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// NPM Express App
const app = express();
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 


// Routes

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname + '/notes.html'));
});

// if user is on another other page, send to home page
app.use( function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
    

// Starts the server to begin listening
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});