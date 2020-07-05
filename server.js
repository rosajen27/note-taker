// DEPENDENCIES

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

//------------------------------------------------------- 



//-------------------------------------------------------

// ROUTES

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname + '/notes.html'));
});

// if user is on another other page, send to home page
app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Displays all notes
app.get("/api/notes", function (req, res) {
    return res.json(notes);
});

// Displays a single note, or returns false
app.get("/api/notes/:note", function (req, res) {
    var chosen = req.params.note;

    console.log(chosen);

    for (var i = 0; i < notes.length; i++) {
        if (chosen === notes[i].routeName) {
            return res.json(notes[i]);
        }
    }

    return res.json(false);
});

// Create New notes - takes in JSON input
app.post("/api/notes", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;

    // Using a RegEx Pattern to remove spaces from newNote
    newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

    console.log(newNote);

    notes.push(newNote);

    res.json(newNote);
});



//-------------------------------------------------------

// STARTS THE SERVER TO BEGIN LISTENING

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});