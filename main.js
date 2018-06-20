/*jshint esversion: 6 */
const express = require('express');
//const boot=require('bootstrap');
const app = express();
const path = require('path');

////////////////////////////////////////////////////////////////////////////////

app.set('views', path.join(__dirname, 'views_'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jscript', express.static(__dirname + '/node_modules/jquery/dist'));
app.set('view engine', 'ejs');


/////////////////////////////////////////////////////////////////////////////////

module.exports = app;