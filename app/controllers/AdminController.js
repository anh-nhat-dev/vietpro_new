
module.exports = {

    index: function(req, res) {
        res.render('backend/admin/index');
    },
    
    logOut: function(req, res) {
        req.logOut();
        return res.redirect('/login');

    }
}