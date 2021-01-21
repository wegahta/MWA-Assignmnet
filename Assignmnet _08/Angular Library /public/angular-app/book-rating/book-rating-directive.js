angular.module("Library").directive("bookRating", BookRating);
 function BookRating(){
     return{
     restrict:"E",
     templateUrl: "angular-app/book-rating/rating.html",
     bintoController: true,
     controller: "BookController",
     scope:{
         start:"@"
     }
 }
}