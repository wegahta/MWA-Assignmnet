angular.module("meanGames").factory("GameDataFactory", GameDataFactory);

function GameDataFactory($http){
    return{
        getAllGames: getAllGames,
        getOneGame: getOneGame
    };

    function getAllGames(){
        return $http.get("/api/books").then(complete).catch(failed);
    }

    function getOneGame(id){
        return $http.get("/api/books/"+id).then(complete).catch(failed);
    }

    function complete(response){
        console.log(response.data);
        return response.data;
    }

    function failed(error){
        return error.status.statusText;
    }
}
