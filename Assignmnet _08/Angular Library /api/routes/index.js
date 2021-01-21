var express= require("express");
var router= express.Router();
var controllerBook=require("../controllers/books-controller.js");
var controllerAuthor=require("../controllers/author-controller.js");
router.route("/books").
                      get(controllerBook.booksGetAll)
                    .post(controllerBook.booksAddOne);



router.route("/books/:bookId").get(controllerBook.booksGetOne)
.delete(controllerBook.booksDeletOne)
.put(controllerBook.booksUpdateOne)
.delete(controllerBook.booksDeleteOne);

router.route("/books/:bookId/author")
.get(controllerAuthor.authorGetOne)
.delete(controllerAuthor.authorDelete)
.put(controllerAuthor.authorUpdate)
.post(controllerAuthor.authorAddOne);


module.exports=router;