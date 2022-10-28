const con = require("../models/dbcon");

module.exports={
        get: (req, res) => {
            var qry = "SELECT userid as x, course as y from mdl_course_completions";
            con.query(qry, (err,result)=>{
                if(err) throw err;
                res.json(result);
            });
        }
}