const con = require("../models/dbcon");

module.exports={
        get: (req, res) => {
            var qry = "SELECT name,model,userid from mdl_user_devices ";
            con.query(qry, (err,result)=>{
                if(err) throw err;
                res.json(result);
            });
        }
}