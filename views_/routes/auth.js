/*jshint esversion: 6 */

function setUser(bd, req, res) {

    bd.query('INSERT INTO tbl_users (login, email, password) VALUES ($1,$2,$3)', [req.body.login, req.body.email, req.body.password], (err) => {
        if (err) {
            res.json({
                login: 'Email уже используеться'
            });

            console.log('Email используеться');
        } else {
            res.json({
                login: 'Добро пожаловать ' + req.body.login
            });

            console.log('kjhkjh', req.body);
        }
    });


}
module.exports = setUser;