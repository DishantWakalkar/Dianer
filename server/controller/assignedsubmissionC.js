const con = require("../models/dbcon");

module.exports={
        get: (req, res) => {
            var qry = "SELECT userid,status from mdl_assign_submission";
            con.query(qry, (err,result)=>{
                if(err) throw err;
                res.json(result);
            });
        }
}