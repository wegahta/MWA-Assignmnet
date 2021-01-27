const express = require("express");
var router = express.Router();

const conrollerStudents=require("../controllers/students-controller");
const controllerFaculty=require("../controllers/faculty-controller");


console.log("are you in routes")

router.route("/students")
.get(conrollerStudents.studentsIndex);

router.route("/wellcome")
.get(conrollerStudents.wellcomepage);


router.route("/students/create")
.get(conrollerStudents.studntsCreate);

router.route("/faculty")
.get(conrollerStudents.facultyIndex);

router.route("/students/login")
.get(conrollerStudents.studntsLogin);

router.route("/success")
.get(conrollerStudents.successCreated);

router.route("/logdin")
.get(conrollerStudents.logdin);

router.route("/student/update")
.get(conrollerStudents.updateStudent);

router.route("/student/remove")
.get(conrollerStudents.removeStudent);


router.route("/students/manageQr")
.get(conrollerStudents.manageQr);

module.exports=router;