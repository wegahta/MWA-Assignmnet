angular.module("myJobApp").controller("JobController", JobController);
console.log("are you even here");
function JobController(JobDataFactory){
    var vm=this;
    vm.title="Job MEAN application"
    console.log("under controller");

    JobDataFactory.getAllJobs().then(function(response){
            vm.jobs=response
    })
    
    vm.postData=function(){
        var postdata={
            title: vm.newTitle,
            salary: vm.newSalary,
            description: vm.newdescription,
            skill:vm.newskill,
            postData: vm.newpostData,
            exprince:vm.newexprince
        }
        // console.log(postData)
        if(vm.jobForm){
        JobDataFactory.postJob(postdata).then(function(response){
            console.log("job saved")
        }).catch(function(error){
            console.log(error)
        });
    }
        else{
            vm.isSubmited=true;
        }

        };
    }
