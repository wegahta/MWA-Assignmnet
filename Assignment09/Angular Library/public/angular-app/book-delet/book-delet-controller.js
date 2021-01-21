angular.module("Library").controller("DeletBookController", DeleteBookController);
function DeleteBookController($routeProvider){
    var vm=this;
    var id=$routeProvider.id;
    BookDataFactory.deletOneBook(id).then(function(response){
        vm.deletOneBook=response;
    })
}