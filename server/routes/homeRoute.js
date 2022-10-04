const express = require('express');
const router = express.Router();
const gradesC = require("../controller/gradesC");

router.get('/getGrades', gradesC.get);
module.exports = router;