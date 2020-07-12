const notesData = require ('../db/notes-data.js');

module.exports = function (app) {
    app.get('/api/notes'), function (req, res) {
        res.json(notesData);
    });
}