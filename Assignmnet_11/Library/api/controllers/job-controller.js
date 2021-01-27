var mongoose=require("mongoose");
var Jobs=mongoose.model("Jobs");
 module.exports.jobsGetAll=function(req, res){
     console.log("loooking for a job");
     var offset=0;
     var count=5;
     var maxCount=10;
     if(req.query && req.query.offset){
         offset=parseInt(req.query.offset, 10);
     };
     if(req.query && req.query.count){
         count=parseInt(req.query.count);
     };
     if(isNaN(offset)||isNaN(count)){
         res.status(400).json({"message": "QuerySting offset and Count should "+maxCount});
         return;
     }
     if(count>maxCount){
         res.status(400).json({"Message":"Count exceed more than"+maxCount});
         return;

         }
         console.log(count);

Jobs.find().skip(offset).limit(count).exec(function(err, jobs){
    if(err){
        console.log("Error finding jobs");
        res.status(500).json(err);
    }
    else{
        console.log("Found a job");
        res.status(200).json(jobs);
    };
});
 };

 module.exports.jobGetOne=function(req, res){
     console.log("Getting One Job");
     var jobId=req.params.jobId
     Jobs.findById(jobId).exec(function(err, job){
         if(err){
             req.status(500);
             req.message(err);
            }
            else{
                res.status(200).json(job)
            }
         
     })

 }
 module.exports.addJob=function(req, res){
     console.log("post to add abook");
     console.log(req.body);
     if(req.body){
         console.log(req.body.title);
         Jobs.create({
           title: req.body.title,
           salary: parseInt(req.body.salary),
           description: req.body.description, 
           exprince: parseInt(req.body.exprince),
           skill: req.body.skill,
           postData: req.body.postData,
           location: {}
         },
         function(err, job){
             var response={
                 status:200,
                 message:job
             }
             if(err){
                 console.log("Error adding a job");
                 response.status=400;
                 response.message=err;

             }
             res.status(response.status).json(response.message);
             
         });
        
         console.log(req.body)
     }
     else{
         console.log("Body is missing from the post")
        
     }

  }
  module.exports.jobUpdate=function(req, res){
      console.log("updating a book")
      var jobId=req.params.jobId;

    Jobs.findById(jobId).select("-location").exec(function(err, job){
        var response={
            status:200,
            message:job
        }
        console.log(job)
        if(err){
            console.log("Error finding book", err);
            response.status=500;
            response.message=err;

        }
        else if(!job) { 
            response.status=400;
            response.message={"message": "Job Id is not Find"};
           }
           job.title=req.body.title;
           job.salary=parseInt(req.body.salary)
           job.description=req.body.description;
           job.exprince=req.body.exprince;
           job.postData=req.body.location;
           job.save(function(err, jobsaved){
               if(err){
                   console.log("Error saving a job"+ err)
                   response.status=500
                   response.message=err
               }
               else{
                   console.log("job Updated")
                   response.status=200;
                   response.message=jobsaved;
               }
               res.status(response.status).json(response.message)
           })
        }

    )
  };
  module.exports.jobDelet=function(req, res){
      console.log("Deleting a job")
      var jobId=req.params.jobId;
      Jobs.findOneAndDelete(jobId).exec(function(err, jobdelet){
          console.log(jobdelet);
        var response={
            status:200,
            message:jobdelet
        }

          if(err){
              console.log("Error deleting a job");
              
             response.status=500;
             response.message=err
          }
        res.status(response.status).json(response.message);
      })
  }

