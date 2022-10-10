const con = require("../models/dbcon");

module.exports={
        get: (req, res) => {
            var qry = "SELECT grade,enrol,courseid from mdl_enrol";
            con.query(qry, (err,result)=>{
                if(err) throw err;
                res.json(result);
            });
        }
}