/*jshint esversion: 6 */
const config = require('./views_/config.js');
const {
    Client
} = require('pg');
const connectionString = config.BD;

const client = new Client({
    connectionString: connectionString,
    ssl: true
});



module.exports = (ar) => {
    ar('Подключение');
    client.connect();
    return client;

}