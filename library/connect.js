var mysql = require('mysql');
module.exports = function() {

    var conn = mysql.createConnection({
        host: _config('db.host'),
        user: _config('db.user'),
        password: _config('db.password'),
        database: _config('db.database')
    })

    conn.connect(function(err){
        if (err) return;
        global.conn = conn;
    });

}