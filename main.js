/*jshint esversion: 6 */
const express = require('express');
//const boot=require('bootstrap');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./views_/routes/auth.js');

////////////////////////////////////////////////////////////////////////////////

app.set('views', path.join(__dirname, 'views_'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jscript', express.static(__dirname + '/node_modules/jquery/dist'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extends: true
}));
app.use(bodyParser.json());
//app.use('/api/auth', router);
/////////////////////////////////////////////////////////////////////////////////

module.exports = app;