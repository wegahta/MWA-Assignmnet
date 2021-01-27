var express = require("express");
var router = express.Router();

var controllerGames = require("../controllers/games-controllers");
var controllerPublishers = require("../controllers/publisher-controllers");

var controllerUsers=require("../controllers/users-controller");

router.route("/games").
get( controllerUsers.authenticate, controllerGames.gamesGetAll).
post(controllerUsers.authenticate,controllerGames.gamesAddOne);


router.route("/games/:gameId").
get(controllerUsers.authenticate,controllerGames.gamesGetOne).
put(controllerUsers.authenticate,controllerGames.gamesUpdateOne).
delete(controllerUsers.authenticate,controllerGames.gamesDeleteOne);


router.route("/games/:gameId/publisher")
.get(controllerUsers.authenticate,controllerPublishers.publisherGet)
.post(controllerUsers.authenticate,controllerPublishers.publisherAdd)
.put(controllerUsers.authenticate,controllerPublishers.publisherUpdate)
.delete(controllerUsers.authenticate,controllerPublishers.publisherDelete)
;


router.route("/users/register")
.post(controllerUsers.register);

router.route("/users/login").post(controllerUsers.login);

module.exports = router;