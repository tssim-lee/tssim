/*jshint esversion: 6 */
const config = require('./views_/config.js');
const {
    Client
} = require('pg');
const connectionString = config.BD;



const client = new Client({

    // user: 'tssim',
    // host: 'ex2.cyaqfdljfc4j.us-east-2.rds.amazonaws.com',
    //  database: 'postgres',
    //  password: 'LoraSim_1BD',
    //  port: 5432
    connectionString: connectionString,
    ssl: true
});



module.exports = (ar) => {
    client.connect();
    ar('Подключение');
    return client;

}