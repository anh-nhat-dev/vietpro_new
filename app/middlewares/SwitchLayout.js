module.exports =  function(req, res, next){
    
    if (req.url.match(/admin/)) {
        app.set('layout', 'layouts/backend');
    } else {
        app.set('layout', 'layouts/frontend');
    }
    next();

}