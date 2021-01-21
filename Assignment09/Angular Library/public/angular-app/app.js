angular.module("Library", ["ngRoute"]).config(config);
console.log("wegih")
function config($routeProvider){
    console.log("Are you even Reached Here");

    $routeProvider
        .when("/",{
            templateUrl: "angular-app/book-list/book.html",
            controller: "BooksController",
            controllerAs: "vm"
        })
        .when("/book/:id",{
            templateUrl: "angular-app/book-display/book.html",
            controller: "BookController",
            controllerAs: "vm"
        })

        .when("/delete/book/:id",{
            templateUrl: "angular-app/book-delete/book-delete.html",
            controller: "DeleteBookController",
            controllerAs: "vm"
        })
}
