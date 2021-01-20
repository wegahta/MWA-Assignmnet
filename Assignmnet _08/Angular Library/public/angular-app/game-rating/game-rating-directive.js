angular.module("meanGames").directive("gameRating", GameRating);
 function GameRating(){
     return{
     restrict:"E",
     templateUrl: "angular-app/game-rating/rating.html",
     bintoController: true,
     controller: "GameController",
     scope:{
         start:"@"
     }
 }
}