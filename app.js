/*jshint esversion: 6 */
const config = require('./views_/config');
const app = require('./main');
const b_d = require('./database');
const control = require('./controllers');
const setUser = require('./views_/routes/auth.js');



const bd = b_d((bd) => {
    ///////////////////////////////////////////////////////////////
    app.listen(config.PORT, () => { //--------------------------///
        console.log(`${bd} к  порту  ${config.PORT}`); /////
    }); //-----------------------------------------------------////
    ///////////////////////////////////////////////////////////////

});
app.get('/', (req, res) => {
    control.c(res, bd);
    control.l(req.ip);
    console.log('connect', req.ip);


});

app.get('/blogSA', (req, res) => {
    control.b(res, bd);
})
app.post('/api/auth/post', (req, res) => {
    setUser(bd, req, res);

});