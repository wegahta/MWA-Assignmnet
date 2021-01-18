var express = require("express");
var router = express.Router();

var controllerGames = require("../controllers/games-controllers");
var controllerPublishers = require("../controllers/publisher-controllers");
var controllerReviews= require("../controllers/reviews-controllers");
router.route("/games").
get(controllerGames.gamesGetAll).
post(controllerGames.gamesAddOne);

router.route("/games/:gameId").
get(controllerGames.gamesGetOne).
put(controllerGames.gamesUpdateOne).
delete(controllerGames.gamesDeleteOne);


router.route("/games/:gameId/publishers")
.get(controllerPublishers.publisherGetOne)
.delete(controllerPublishers.publisherDelete)
.put(controllerPublishers.publisherUpdate);

router.route("/games/:gameId/reviews")
.get(controllerReviews.reviewGetAll)
module.exports = router;