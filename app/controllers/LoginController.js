const bcrypt = require('bcrypt');
const passport = require('passport');
module.exports = {

    index: function(req, res) {

        res.render('login/login', { layout: 'layouts/login' });

    },

    login: passport.authenticate('local-login', {
        successRedirect: '/admin',
        failureRedirect: '/login'
    })

}