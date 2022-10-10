const con = require("../models/dbcon");

module.exports={
        get: (req, res) => {
            var qry = "SELECT COUNT(id) from mdl_course_categories";
            con.query(qry, (err,result)=>{
                if(err) throw err;
                res.json(result);
            });
        }
}