var express=require("express");
var router=express.Router();
 var controllerJobSearch=require("../controllers/job-controller.js");
const controllerLocation=require("../controllers/location-controler.js")
 router.route("/jobs")
.get(controllerJobSearch.jobsGetAll)
 .post(controllerJobSearch.addJob);


router.route("/jobs/:jobId")
.get(controllerJobSearch.jobGetOne)
.put(controllerJobSearch.jobUpdate)
.delete(controllerJobSearch.jobDelet)
.put(controllerLocation.locationUpdate);


router.route("/jobs/:jobId/location")
.get(controllerLocation.locationGetOne)
.put(controllerLocation.locationUpdate);
//delete(controllerLocation.locationDelet);




module.exports=router;