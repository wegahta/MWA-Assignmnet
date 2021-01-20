angular.module("meanGames", ["ngRoute"]).config(config);
console.log("wegih")
function config($routeProvider){
    console.log("gamecon");
   
    $routeProvider
    .when("/", {
        templateUrl: "angular-app/game-list/game.html",
        controller : "GamesController",
        controllerAs: "vm"
    })
    .when("/game/:id", {
        templateUrl: "angular-app/game-display/game.html",
        controller : "GameController",
        controllerAs: "vm"
    })
}


// function config($routeProvider){
//     $routeProvider
//     .when("/",{
//         templateUrl:"angular-app/game-list/game.html",
//         controller:GamesController,
//         controllerAs:"vm"
//     })
// }