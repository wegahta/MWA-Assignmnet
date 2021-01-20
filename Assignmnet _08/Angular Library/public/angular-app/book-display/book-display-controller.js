angular.module("Library").controller("BookController", BookController);

function _getStarRating(stars){
    return new Array(stars)
}
function BookController($routeParams, BookDataFactory){
    var vm = this;
    vm.title = "MEAN Games App";

    var id = $routeParams.id;

    BookDataFactory.getOneBook(id)
        .then(function(response){
            vm.book = response;
            vm.rating = _getStarRating(response.rate);
    });
}