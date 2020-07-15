var notesData = require('../db/notes-data.js');

module.exports = function (app) {

    // get notes data
    app.get('/api/notes', function (req, res) {
        res.json(notesData);
    });

    // post new note and give each note a unique ID
    app.post('/api/notes', function (req, res) {
        const { body } = req;

        body.id = notesData.length + 1;

        notesData.push(req.body);
        res.json(true);

        console.log(notesData);
    });

    // delete note
    app.delete('/api/notes/:id', function (req, res) {
        console.log("req params id: " + req.params.id);

        notesData = notesData.filter(post => post.id !== parseInt(req.params.id));

        res.json(true);

    });


}