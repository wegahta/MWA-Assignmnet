angular.module("Library").controller("DeletBookController", DeleteBookController);
function DeleteBookController($routeProvider){
    var vm=this;
    consolelog(insideDeleting)
    var id=$routeProvider.id;
    BookDataFactory.deletOneBook(id).then(function(response){
        vm.deletOneBook=response;
    })
}