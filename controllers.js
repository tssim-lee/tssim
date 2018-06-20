/*jshint esversion: 6 */
const fs = require('fs');

/////////////////////////////////////
function couNT(res, bd) {
    let playlistId = 1;
    bd.get('SELECT * FROM tbl WHERE id = ?', [playlistId], (err, results) => {
        res.render('index', {
            count: results
        });
        let i = results.number;
        i += 1;
        bd.get('UPDATE tbl SET number =? WHERE id=1', [i]);

    });
}

///////////////////////////////////////////////////
function logConnect(argument) {

    fs.appendFile(__dirname + '/consol.txt', argument + '\n', (error) => {
        if (error) {
            return console.log(error);
        }
    });

}

////////////////////////////////////////////
module.exports.c = couNT;

module.exports.l = logConnect;