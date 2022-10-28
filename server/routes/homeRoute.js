const express = require('express');
const router = express.Router();
const gradesC = require("../controller/gradesC");
// const deviceC = require("../controller/deviceC");
const UserC = require('../controller/UserC');
const quizC = require('../controller/quizC');
const coursecatC = require('../controller/coursecatC');
const assignedsubmissionC = require('../controller/assignedsubmissionC');
const userlastaccessC = require('../controller/userlastaccessC');
const enrolC = require('../controller/enrolC');
const attendancelogC = require('../controller/attendancelogC');



router.get('/getGrades', gradesC.get);
// router.get('/getDevice', deviceC.get);
router.get('/getUser', UserC.get);
router.get('/getQuiz', quizC.get);
router.get('/getcoursecatC', coursecatC.get);
router.get('/getaassignedsubmission', assignedsubmissionC.get);
router.get('/getuserlastaccess', userlastaccessC.get);
router.get('/getenrol', enrolC.get);
router.get('/getattendlog', attendancelogC.get);

module.exports = router;