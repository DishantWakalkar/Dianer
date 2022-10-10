const con = require("../models/dbcon");

module.exports={
        get: (req, res) => {
            var qry = "SELECT id from mdl_user";
            con.query(qry, (err,result)=>{
                if(err) throw err;
                res.json(result);
            });
        }
}