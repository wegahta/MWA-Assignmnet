var mongoose=require("mongoose");
var Books=mongoose.model("Books")
module.exports.booksGetAll = function (req, res) {
    console.log("looking for a book");
    var offset = 0;
    var count = 5;
     const maxCount = 10;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    };



     if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    };



    if (isNaN(offset) || isNaN(count)) {
        res.status(400).json({ "message": "QueryString Offset and Count should be numbers" });
        return;
    }
    if (count > maxCount) {
        res.status(400).json({ "message": "Cannot exceed count of " + maxCount });
        return;
    };


    console.log(count);


    Books.find().skip(offset).limit(count).exec(function (err, books) {
        if (err) {
            console.log("Error finding books");
            res.status(500).json(err);
        } else {
            console.log("Found books", books.length);
            res.status(200).json(books);
        };
    });
};

// get one book by id

module.exports.booksGetOne=function(req, res){
    console.log("Geting a book by id")
    var bookId=req.params.bookId;
    Books.findById(bookId).exec(function(err, books){
        res.status(200).json(books)
    });
};
// Deleting a book by id

// updating a book by id
module.exports.booksAddOne=function(req, res){
    console.log("post to add a book")
    if(req.body){
    console.log(req.body.isbn);

    
        Books.create({
            isbn:req.body.isbn,
            title:req.body.title,
            subtitle:req.body.subtitle,
            published:req.body.published,
            publisher:req.body.publisher,
            page:req.body.page,
            description:req.body.description,
            website:req.body.website
            },
       
        function(err,books){
            var response= {
                status: 200,
                message: books
            }
            if (err) {
                console.log("Error finding game",err);
                response.status=400;
                response.message= err;
            }
            
            
            res.status(response.status).json(response.message);
        });
        console.log(req.body);
    }
    else
  {
    console.log("Body is missing from POSt body");
  }
        
   
}
module.exports.booksDeletOne = function(req, res) {
    console.log("Deleting a Book");
    var bookId = req.params.bookId;
console.log(bookId)
    Books.findOneAndDelete(bookId).exec(function (err, deleteGames) {
        var response= {
            status: 204,
            message: deleteGames
        }
        if (err) {
            console.log("Error finding game",err);
            response.status=500;
            response.message= err;

        }else if(!deleteGames) {
            response.status=404;
            response.message= {"message" : "Game ID not found"};
            } 
            res.status(response.status).json(response.message)
            
    })

};


module.exports.booksUpdateOne = function(req, res) {
    
    console.log("post to update  a book");
    var bookId = req.params.bookId;
    console.log(bookId)

    Books.findById(bookId).select("-author").exec(
        function (err, thisbook) {
        var response= {
            status: 200,
            message: thisbook
            
        }
        console.log(thisbook)
        if (err) {
            console.log("Error finding book",err);
            response.status=500;
            response.message= err;

        }else if(!thisbook) {
            response.status=404;
            response.message= {"message" : "book ID not found"};
            } 
            //else{
        // console.log("Get game with gameId: ", gameId);
        // res.status(200).json(game);
        // };
        // if(response.status!==204){
        //     res.status(response.status).json(response.message);
        // }
        //else{
            thisbook.isbn=req.body.isbn;
            thisbook.title=req.body.title;
            thisbook.subtitle=req.body.subtitle;
            thisbook.published=req.body.published;
            thisbook.page=parseInt(req.body.page);
            // games. publisher="";
            // games.review="",
            thisbook.description=req.body.description;
            thisbook.website=req.body.website;
            //console.log(books);
            thisbook.save(function(err,books){
               
                if (err) {
                    console.log("Error finding book",err);
                    response.status=500;
                    response.message= err;
                }
                else{
                    console.log("book update");
                    response.status=200
                    response.message=books
                }
                
                res.status(response.status).json(response.message)
            })
        }
    )   
};
module.exports.booksDeleteOne = function(req, res) {
    console.log("Deleting a book by id");
    var bookId = req.params.bookId;
console.log(bookId)
    Books.findOneAndDelete(bookId).exec(function (err, deleteBook) {
        var response= {
            status: 200,
            message: deleteBook
        }
        if (err) {
            console.log("Error finding a book",err);
            response.status=500;
            response.message= err;
        }
        //  }else if(!deleteBook) {
        //     response.status=404;
        //     response.message= {"message" : "Book ID not found"};
        //     } 
            res.status(response.status).json(response.message)
            
    })

};

