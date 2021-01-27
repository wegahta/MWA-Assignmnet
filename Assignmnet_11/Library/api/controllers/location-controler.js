const { response } = require("express");
var mongoose=require("mongoose");
var Jobs=mongoose.model("Jobs");

module.exports.locationGetOne=function(req, res){
    console.log("Geating Locations for a job");
    var jobId=req.params.jobId;
    Jobs.findById(jobId).exec(function(err, job){
        var response={
            status:200,
            message:job.location
        }
        if(err){
            console.log("Error finding location");
            response.status=500;
            response.message=err;
        }
    res.status(response.status).json(response.message);
    })
}
module.exports.locationUpdate=function(req, res){
    console.log("deleting a location of a job")
     const jobId=req.params.jobId;
     if(req.body){
         Jobs.findOneAndUpdate({_id:jobId},{location:req.body}, function(err, job){
             const response={
                 status:200,
                 message:job
             }
             if(err){
                 response.status=500;
                 response.message=err
             }
             else if(!job){
                 response.status=500;
                 response.message="job not found";
             }
             res.status(response.status).json(response.message);

         })
     }
     else{
         res.status(500).json({"message":"reqest body is empty"});
     }
     module.exports.locationDelet=function(req, res){
         console.log("deleting Location of a given Job");
         const jobId=req.params.jobId;
         Jobs.findById(jobId).exec(function(err, job){
        
             var respponse={status:204};
                 if(err){
                     console.log("Error findig book");
                     respponse.status=500;
                     respponse.status=err;

                 }
                 else if(!job) {
                    response.message= err;
                     }
                    else if(!job) {
                        response.status=404;
                        response.message= {"message" : "job ID not found"}; 
                    }
                    if (response.status !== 204){
   
                        res.status(response.status).json(response.message);
                    }
                 else{
                     _deletLocation(req, res, job);
                 }
                     //if(res.status(respponse.status))

        
                     });
     }
}
var _deletLocation=function(req, res, job){
    job.location.remove();
    job.save(function(err, removedlocation){
        if(err){
            console.log("error finding  job");
            response.status=500;
            response.message=err;
        }
        res.status(response.status).json(response.message);
    })
}