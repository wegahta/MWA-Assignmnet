const express = require("express");
var router = express.Router();

const conrollerStudents=require("../controllers/students-controller");
//const controllerFaculty=require("../controllers/faculty-controller");


console.log("Here is the router page")


router.route("/students").get(conrollerStudents.studentsGetAll);
// console.log("are you in routes")

router.route("/students")
.get(conrollerStudents.studentsIndex)
.post(conrollerStudents.studentAddOne);

router.route("/students/:studentId")
.get(conrollerStudents.StudentsGetOne)
.delete(conrollerStudents.studentDelete)
.put(conrollerStudents.studentUpdate);


//Renderning the Html pages 
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

router.route("/student/studentId")
.get(conrollerStudents.StudentsGetOne)
.delete(conrollerStudents.studentDelete);


router.route("/students/manageQr")
.get(conrollerStudents.manageQr);

module.exports=router;