#!/usr/bin/env nodejs
const arturonet = require('./arturonet.js');
const app = arturonet.app

app.listen(8080, onListening);

function onListening() {
    console.log("Started testing server, do not use in production!!");
}
