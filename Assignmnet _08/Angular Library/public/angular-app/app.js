angular.module("Library", ["ngRoute"]).config(config);
console.log("wegih")
function config($routeProvider){
    console.log("Are you even Reached Here");
   
    $routeProvider
    .when("/", {
        templateUrl: "angular-app/book-list/book.html",
        controller : "BooksController",
        controllerAs: "vm"
    })
    .when("/book/:id", {
        templateUrl: "angular-app/book-display/book.html",
        controller : "BookController",
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