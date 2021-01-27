angular.module("myJobApp").controller("JobDeletController", JobDeletController);

 function JobDeletController($routeParmas,JobDataFactory){
     var vm=this;
     vm.title="Deleting a job from the post";
     var id=$routeParmas.id
     JobDataFactory.deletOneJob(id).then(function(response){
         vm.deletjob=response;
     })
 
}

