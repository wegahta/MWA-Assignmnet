angular.module("myJobApp").factory("JobDataFactory", JobDataFactory);
  console.log("what about here");
function JobDataFactory($http){
    return{
        getAllJobs:getAllJobs,
        getOneJob:getOneJob,
        deletOneJob:deletOneJob,
        postJob:postJob

    }
    function getAllJobs(){
        return $http.get("/api/jobs").then(complet).catch(failed);
    
    }
    function getOneJob(id){
        return $http.get("/api/jobs/"+id).then(complet).catch(failed);

    }
    function deletOneJob(id){
        return $http.delet("/api/jobs/"+id).then(complet).catch(failed)

        

    }
    function postJob(job){
        return $http.post("/api/jobs",job).then(complet).catch(failed);

        
    }
    function complet(response){
        return response.data;

    }
    function failed(error){
  return error.status.statusText;
    }
}