const { response } = require("express");
var mongoose=require("mongoose");
 const Book=mongoose.model("Books");

 module.exports.authorGetOne = function (req, res) {
    var bookId=req.params.bookId;
    
    Book.findById(bookId).select("author").exec(function(err,book){
        //console.log(publisher)
        res.status(200).json(book.author);
    })
      };

      var _deleteAuthor= function(req, res, book) {
        book.author.remove();
         book.save(function(err, game) {
       var response= {status: 204}; 
       if (err) {
       console.log("Error finding book");
       response.status= 500;
       response.message= err;
       }
       res.status(response.status).json(response.message); });
       }
   
       module.exports.authorDelete= function(req, res) {
           const bookId= req.params.bookId;
           console.log("PUT bookId ", bookId);
            Book.findById(bookId).exec(function(err, book) {
           var response= {status: 204};
            if (err) {
           console.log("Error finding book"); 
           response.status= 500; 
           response.status= err;
       } 
           else if(!book) {
           response.message= err;
            } else if(!book) {
               response.status=404;
               response.message= {"message" : "Game ID not found"}; 
           }
           if (response.status !== 204){
   
                 res.status(response.status).json(response.message);
           } else {
           _deleteAuthor(req, res, book);
           } });
       };

       //updating an author


       var _updateAuthor= function(req, res, book) {
        book.author.name= req.body.name;
        book.author.sex=req.body.sex;
        book.author.numberbook=req.body.numberbook;
        book.author.country=req.body.country;
        book.save(function(err, updatedBook) {
            var response= {status: 204}; 
            if (err) {
                
                    console.log("Error finding book"); 
                    response.status= 500; 
                    response.message= err;
                } 
                res.status(response.status).json(response.message);
            });
        }


       module.exports.authorUpdate= function(req, res) {
        var bookId= req.params.bookId;
        console.log("PUT gameId ", bookId);
         Book.findById(bookId).exec(function(err, book) {
        var response= {status: 204};
         if (err) {
             console.log("Error finding book");
             response.status= 500;
             response.message= err;
         }


                else if(!book) {
                    response.status= 404; 
                    response.message= {"message" : "Book ID not found"};
                }
                if (response.status !== 204) { 
                  res.status(response.status).json(response.message);
                } else {
                _updateAuthor(req, res, book);
                } 
            });
                };

                // adding an author to a book

                module.exports.authorAddOne=function(req, res){
                  console.log("Geting a book by id for update author")
                  var bookId=req.params.bookId;
                  Book.findById(bookId).select("author").exec(function(err, book){
                  
                    if(!book.author){
                      book.author={
                        name:"",
                        sex:"",
                        numberbook:"",
                        country:""
                      };
                    }

                    book.author.name=req.body.author;
                    book.author.sex=req.body.select;
                    book.author.numberbook=req.body.numberbook;
                    book.author.country=req.body.country;
                    book.save(function(err, update){
                      var response= {status: 200}; 
                      if(err){
                        console.log("Error updating an author")
                        response.status=500;
                        response.message=err;
                      }
                    })
                     
                    res.status(200).json(book)
                });
              };

