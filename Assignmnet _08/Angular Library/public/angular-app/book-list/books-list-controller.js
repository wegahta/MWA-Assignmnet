
angular.module("Library") .controller("BooksController", BooksController); 
console.log("bexihe")
function BooksController(BookDataFactory){
  console.log("ewe")  
    var vm = this;
    vm.title = "MEAN Library App";

    BookDataFactory.getAllBooks()
        .then(function(response){
            vm.books = response;
        });
}