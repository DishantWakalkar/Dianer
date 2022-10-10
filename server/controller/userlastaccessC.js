const con = require("../models/dbcon");

module.exports={
        get: (req, res) => {
            var qry = "SELECT timeaccess from mdl_user_lastaccess";
            con.query(qry, (err,result)=>{
                if(err) throw err;
                res.json(result);
            });
        }
}