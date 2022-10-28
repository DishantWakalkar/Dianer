const con = require("../models/dbcon");

module.exports={
        get: (req, res) => {
            var qry = "SELECT name,grade from mdl_quiz";
            con.query(qry, (err,result)=>{
                if(err) throw err;
                res.json(result);
            });
        }
}