const express = require('express');
const path = require('path');
const engine = require('ejs-blocks');
const app = new express();

//app.set('views', path.join(__dirname, '/templates'));
app.set('views', 'templates');
app.use('/static', express.static('static'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(8080, function () {
    console.log("Listening on port 8080");
});
