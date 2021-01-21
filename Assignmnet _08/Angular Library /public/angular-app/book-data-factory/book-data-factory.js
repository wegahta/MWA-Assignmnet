angular.module("Library").factory("BookDataFactory", BookDataFactory);

function BookDataFactory($http){
    console.log("here ")
    return{
        getAllBooks: getAllBooks,
        getOneBook: getOneBook,
        addOneBook: postBook
    };

    function getAllBooks(){
        return $http.get("/api/books").then(complete).catch(failed);
    }
    //Adding new book Angular
    function postBook(){
        console.log("book is saving");
        return $http.post("/api/books", book).then(complete).catch(failed);

        
    }

    function getOneBook(id){
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