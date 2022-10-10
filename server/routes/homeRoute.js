const express = require('express');
const router = express.Router();
const gradesC = require("../controller/gradesC");
const deviceC = require("../controller/deviceC");

router.get('/getGrades', gradesC.get);
router.get('/getDevice', deviceC.get);
module.exports = router;