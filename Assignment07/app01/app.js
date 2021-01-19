angular.module("myProperApp", ['ngRoute']).config(config);
function config($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl :"template/main.html",
        controller: "MainController",
        controllerAs:"mainCtrl"
    })
    .when("/dog",{
        templateUrl:"template/dog.html",
        controller:"dogController",
        controllerAs:"dogCtrl"
    })
    .when("/about", {
        templateUrl:"template/about.html",
        controller: "AboutController",
        controllerAs:"aboutCtrl"
    }).otherwise({
        redirecTo: "/"
    })

}