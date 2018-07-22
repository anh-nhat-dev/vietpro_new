module.exports = {
    list:async function(req, res){

        const currentPage = req.query.page || 1;
        const totalRows = await new Promise(function(resolve, reject){
            conn.query(`SELECT count(*) as totalRows FROM account`, function(err, result){
                if (err) reject(err)
                if (result) resolve(result)
            });
        });
        const rowsPerPage = 10;
        const totalPage = Math.round(totalRows/rowsPerPage);
        const start = (rowsPerPage * currentPage) - rowsPerPage;
        const ejs = require('ejs');
        const html =  ejs.renderFile(require('path').join(app.get('views'), 'default', 'pagination.ejs'));
        const data = await new Promise(function(resolve, reject){
            conn.query(`SELECT * FROM account ORDER BY acc_id DESC LIMIT ?,?`,[start, rowsPerPage], function(err, result){
                if (err) reject(err)
                if (result) resolve(result)
            });
        });

        res.render('backend/account/list', {
            data
         });
    }
}