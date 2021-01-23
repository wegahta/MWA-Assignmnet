angular.module("myJobApp").controller("JobControllers", JobControllers);

function JobControllers($routeParams, JobDataFactory){
    var vm=this;
    vm.title="MEAN Job Application";
     var id=$routeParams.id;
     JobDataFactory.getOneJob(id).then(function(response){
         vm.job=response;
         
     })

}