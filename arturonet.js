const express = require('express');
const path = require('path');
const compression = require('compression');
const engine = require('ejs-blocks');
const request = require('request');
const http = require('http');
const fs = require('fs');
const app = new express();

app.use(compression());

var navbar_items = [{href: '/', id:'home', content:'Home'},
{href:'/social', id:'social', content:'Social'},
{href:'/projects', id:'projects', content:'Projects'}]
var herofoot_items = [{href:'https://discord.gg/ssl', content:'SSL'},
{href:'https://github.com/ArturoGuerra', content:'GitHub'},
{href:'https://www.dixionary.com', content:'Dixionary'},
{href:'https://inwite.dixionary.com', content:'Dixionary Serwer'}]

app.set('views', 'views');
app.use('/static', express.static('static'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var herobody = {title: "Arturo Guerra", subtitle: "Home of the Dixionary", extra: "#Vindows 11"}
    args = {hero: herobody, navbar_items: navbar_items, herofoot_items: herofoot_items}
    res.render('pages/index', args);
});

app.get('/social', function(req, res) {
    var herobody = {title: "Social Media", subtitle: "DISCORD", extra: "#HEILHITLER"}
    args = {hero: herobody, navbar_items: navbar_items, herofoot_items: herofoot_items}
    res.render('pages/social', args);
});

app.get('/projects', function(req, res) {
    var options = {url: "https://api.github.com/users/ArturoGuerra/repos", headers: {'User-Agent': 'request'}};
    var herobody = {title: "Projects", subtitle: "Bots bots and more bots", extra: "#IHAVEYOURTOKEN"}
    request.get(options, function(error, responce, body) {
        let repos = JSON.parse(body);
        args = {hero: herobody, navbar_items: navbar_items, herofoot_items: herofoot_items, repos: repos}
        res.render('pages/projects', args);
    });
});

var server = http.createServer(app);
server.listen("./arturonet.sock");
server.on('listening', onListening);

function onListening() {
    fs.chmodSync('./arturonet.sock', '775');
    console.log("Started unix socked");
};

function servershutdown () {
    server.close();
}

//if (require.main === module) {
//    app.listen(8080, function () {
 //       console.log("Listening on port 8080");
  //  });
//}
process.on('SIGINT', servershutdown);
