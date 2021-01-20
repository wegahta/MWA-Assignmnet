
const mongoose = require("mongoose");
var Game = mongoose.model("Game");
const ObjectId = require("mongodb").ObjectId;




//Get One using MOngoose
module.exports.gamesGetOne = function (req, res) {
    var gameId = req.params.gameId;

    // Good SE Coding Practise
    Game.findById(gameId).exec(function (err, game) {
        var response = {
            status: 200,
            message: game
        };
        if (err) {
            console.log("Error finding game");
            response.status = 500;
            response.message = err;
        } else if (!game) {
            response.status = 404;
            response.message = { "message": "Game ID not found" };
        }
        res.status(response.status).json(response.message);
    });
};

// meathod for By title
module.exports.gameByTitle = function (req, res) {

    var db = dbconnection.get();
    var collection = db.collection("games");
    const gameId = req.params.gameId;

    collection.findOne({ _id: ObjectId(gameId) }, function (err, doc) {
        console.log("GET game with gameId: ", gameId);
        res.status(200).json(doc);
    });


}
module.exports.gamesAddOne = function (req, res) {
    console.log("POST to add a game");


    var db = dbconnection.get();
    var collection = db.collection("games");
    var newGame;
    if (req.body && req.body.title && req.body.price) {
        newGame = req.body;
        newGame.price = parseFloat(req.body.price);
        newGame.title = req.body.title;
        console.log(newGame);
        collection.insertOne(newGame, function (err, response) {
            console.log(response.ops);
            res.status(201).json(req.body);

        });

        console.log(req.body);
    } else {
        console.log("Data missing from POSt body");
        res.status(400).json({ error: "Required data missing from POST" });
    }

}

