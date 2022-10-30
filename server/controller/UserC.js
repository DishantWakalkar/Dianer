const con = require("../models/dbcon");

module.exports={
        get: (req, res) => {
            var qry = "SELECT count(id) as TotalUsers from mdl_user";
            con.query(qry, (err,result)=>{
                if(err) throw err;
                res.json(result);
            });
        }
}