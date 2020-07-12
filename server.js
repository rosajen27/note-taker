const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});