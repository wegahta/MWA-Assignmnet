
angular.module("Library").controller("BooksController", BooksController); 
console.log("bexihe")
function BooksController(BookDataFactory){
  console.log("ewe")  
    var vm = this;
    vm.title = "MEAN Library App";
    BookDataFactory.getAllBooks()
        .then(function(response){
            vm.books = response;
        })
      }
        // //Adding new book using Angular
        // vm.addBook=function(){
        //   console.log(vm.newBookTitle)
        //       var postData = {
        //         isbn: vm.newBookIsbn,
        //         title: vm.newBookTitle,
        //         subtitle: vm.newBookSubtitle,
        //         published: vm.newBookPublished,
        //         publisher: vm.newBookPublisher,
        //         page: vm.newBookPage,
        //         description: vm.newDescription,
        //         website: vm.newBooKWebsite
        //       }
        //       if (vm.bookForm.$valid) {
        //         console.log(postData)
        //               BookDataFactory.addOneBook(postData).then(function (response) {
        //                 console.log("Book saved");
                
        //               }).catch(function (error) {
        //                 console.log(error);
                
        //               });
        //             } else {
        //               vm.isSubmitted = true;
        //             }
                
        //           }

        //         };