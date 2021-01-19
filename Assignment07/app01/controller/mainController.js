angular.module("myProperApp").controller("MainController", MainController);
function MainController($http){
    var vm=this;
    $http.get("http://official-joke-api.appspot.com/jokes/ten").then(function(response){
        vm.jokes=response.data;
    });
}