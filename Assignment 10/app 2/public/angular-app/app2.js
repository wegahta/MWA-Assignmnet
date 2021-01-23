angular.module("myJobApp", ["ngRoute"]).config(config);
console.log("are you here")
 function config($routeProvider){
     console.log("are you here my app");
     $routeProvider
     .when("/", {
         templateUrl:"angular-app/job-list/job.html",
         controller:"JobController",
         controllerAs: "vm"
     })
     .when("/job/:id", {
        templateUrl:"angular-app/job-display/job.html",
        controller:"JobControllers",
        controllerAs: "vm"
     })
    .when("/delet/job/:id",{
        templateUrl: "angular-app/job-delet/job-delet.html",
        controller: "JobDeletController",
        controllerAs: "vm"
    })
 }