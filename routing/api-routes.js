const notesData = require ('../db/notes-data.js');

module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        res.json(notesData);
    });;

    app.post('/api/notes', function (req, res) {
        if(notesData.length < 0) {
            notesData.push(req.body);
            res.json(true);
        }
    });
}