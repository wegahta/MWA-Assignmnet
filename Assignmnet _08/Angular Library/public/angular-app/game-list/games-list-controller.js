
angular.module("meanGames") .controller("GamesController", GamesController); 
console.log("bexihe")
function GamesController(GameDataFactory){
  console.log("ewe")  
    var vm = this;
    vm.title = "MEAN Games App";

    GameDataFactory.getAllGames()
        .then(function(response){
            vm.games = response;
        });
}