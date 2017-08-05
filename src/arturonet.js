#!/usr/bin/env nodejs
const express = require('express');
const path = require('path');
const compression = require('compression');
const request = require('request');
const http = require('http');
const fs = require('fs');
const config = require('./config.js');
const cookieSession = require('cookie-session');
const minify = require('express-minify');
const app = exports.app = new express();


var navbar_items = [{href: '/', id:'home', content:'Home'},
{href:'/social', id:'social', content:'Social'},
{href:'/projects', id:'projects', content:'Projects'}]
var herofoot_items = [{href:'https://discord.gg/ssl', content:'SSL'},
{href:'https://github.com/ArturoGuerra', content:'GitHub'},
{href:'https://www.dixionary.com', content:'Dixionary'},
{href:'https://inwite.dixionary.com', content:'Dixionary Serwer'}]

//Sets compression, minify(Reduce file size by optimzing code), and sets cookies/session
var default_args = {navbar_items: navbar_items, herofoot_items: herofoot_items}
const cookiesession = cookieSession({name: "websession", keys: [config.secret1, config.secret2], maxAge: 24 * 60 * 60 * 1000});
app.use(compression());
app.use(minify());
app.use(cookiesession);

//Sets render engine, static dir and views dir all the front end stuff
app.set('views', `${__dirname}/views`);
app.use('/static', express.static(`${__dirname}/static`));
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
    req.session.redirect = req.path || '/';
    if (!req.session.views) {
        req.session.views = {}}
    req.session.views[req.path] = (req.session.views[req.path] || 0) + 1;
    console.log(`${req.session.views[req.path]} ${req.path}`);
    next()})

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
    var herobody = {title: "Projects", subtitle: "Bots bots and more bots", extra: "#IHAVEYOURTOKEN"}
    args = {hero: herobody, navbar_items: navbar_items, herofoot_items: herofoot_items}
    res.render('pages/projects', args);
});
app.use(function(req, res) {
    var args = {navbar_items: navbar_items, herofoot_items: herofoot_items, hero: {title: "404 Chill not found", subtitle: "Daddy dew fucked up", extra: "#SJV"}}
    res.status(404).render('error/custom_404', args)});
function startServer() {
    // Creates unix socket
    var server = http.createServer(app);
    server.listen("./arturonet.sock");
    server.on('listening', onListening);
    function onListening() {
        fs.chmodSync('./arturonet.sock', '775');
        console.log("Started unix socked");
    };
    // Deletes socket file
    function servershutdown () {
        server.close();
    }
    process.on('SIGINT', servershutdown);
}

if (require.main === module) {
    startServer();
}
