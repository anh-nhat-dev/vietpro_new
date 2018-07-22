
module.exports = {
    table: "account",
    findOne: function(params = null){
        conn.query(`SELECT * FROM ${this.table} WHERE ?`, params,  function(err, result) {
            if (err) return;
            return result[0] || null;
        });
    }

}