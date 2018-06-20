/*jshint esversion: 6 */
const sql = require('sqlite3');
const config = require('./views_/config.js');
module.exports = (ar) => {
    ar('Подключение');
    return new sql.Database(config.BD, (err) => console.log(err));

}