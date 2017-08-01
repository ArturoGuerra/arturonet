const express = require('express');
const path = require('path');
const engine = require('ejs-blocks');
const app = new express();

//app.set('views', path.join(__dirname, '/templates'));

var navbar_items = [{href: '/',, id:'home', content:'Home'},\
{href:'/social', id:'social', content:'Social'}, \
{href:'/projets', id:'projets', content:'Projects'}]
var herofoot_items = [{href:'https://discord.gg/ssl', content:'SSL'}, \
{href:'https://github.com/ArturoGuerra', content:'GitHub'}, \
{href:'https://www.dixionary.com', content:'Dixionary'}, \
{href:'https://inwite.dixionary.com', content:'Dixionary Serwer'}]

app.set('views', 'views');
app.use('/static', express.static('static'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var herobody = "<h1 class='title'>Arturo Guerra</h1> \
    <h2 class='subtitle'>Home of the Dixionary</h2> \
    <h3>#Vindows 11</h3>";
    res.render('index', {herobody: herobody, navbar_items: navbar_items, herofoot_items: herofoot_items});
});

app.listen(8080, function () {
    console.log("Listening on port 8080");
});
