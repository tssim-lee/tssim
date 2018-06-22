/*jshint esversion: 6 */
const fs = require('fs');

/////////////////////////////////////
function couNT(res, client) {
    let playlistId = 1;


    client.query('SELECT * FROM tbl WHERE id =($1)', [playlistId], (err, results) => {
        if (err) {
            console.log(err.stack);
        } else {
            console.log(results.rows[0].number);
            res.render('index', {
                count: results
            });
            let i = results.rows[0].number + 1;



            client.query('UPDATE tbl SET number =$1 WHERE id=1', [i], (err) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    client.end();
                }


            });

        }
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