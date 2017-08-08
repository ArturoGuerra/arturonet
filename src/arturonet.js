#!/usr/bin/env nodejs
const express = require('express');
const path = require('path');
const compression = require('compression');
const request = require('request');
const http = require('http');
const fs = require('fs');
const config = require('./config/config.js');
const cookieSession = require('cookie-session');
const minify = require('express-minify');
const cache = require('express-redis-cache')({expire: 1000});
const app = new express();

//Sets compression, minify(Reduce file size by optimzing code), and sets cookies/session
const cookiesession = cookieSession({name: "websession", keys: [config.secret1, config.secret2], maxAge: 24 * 60 * 60 * 1000});
app.use(compression());
app.use(minify());
app.use(cookiesession);

//Sets render engine, static dir and views dir all the front end stuff
app.set('views', path.join(__dirname, "views"));
app.use('/static', express.static(path.join(__dirname, "static")));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    req.session.redirect = req.path || '/';
    if (!req.session.views) {
        req.session.views = {};
    };
    req.session.views[req.path] = (req.session.views[req.path] || 0) + 1;
    console.log(`${req.session.views[req.path]} ${req.path}`);
    next();
})


app.use((req, res, next) => {
    req.args = defaultArgs(req, res);
    next();
});

app.get('/', (req, res, next) => {
    cache.route();
    res.render('pages/index', req.args);
});

app.get('/social', (req, res, next) => {
    cache.route();
    res.render('pages/social', req.args);
});

app.get('/projects', (req, res, next) => {
    cache.route();
    res.render('pages/projects', req.args);
});

//Error Handling
app.use((req, res, next) => {
    res.status(404).render('errors/404', req.args);
});

app.use((err, req, res, next) => {
    if (!err.status) {
        err.status = 500;
    }
    console.error(`${err.status} ${err.message} ${err.stack}`)
    req.args.err = err;
    if (err.status == 500) {
        res.status(500).render("errors/500", req.args);
    } else {
        res.status(err.status).render('errors/error', req.args);
    }
});

function defaultArgs(req, res) {
    args = {};
    args.navbar_items = [
    {href: '/', id:'home', content:'Home'},
    {href:'/social', id:'social', content:'Social'},
    {href:'/projects', id:'projects', content:'Projects'}
    ];
    args.herofoot_items = [
    {href:'https://discord.gg/ssl', content:'SSL'},
    {href:'https://github.com/ArturoGuerra', content:'GitHub'},
    {href:'https://www.dixionary.com', content:'Dixionary'},
    {href:'https://inwite.dixionary.com', content:'Dixionary Serwer'}
    ];
    return args;
}

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

exports.app = app;
