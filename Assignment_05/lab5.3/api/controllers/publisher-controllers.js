const { Mongoose } = require("mongoose")

const mongoose=require("mongoose");
const games = mongoose.model("Game");
  

//new



module.exports.publisherGetOne = function (req, res) {
var gameId=req.params.gameId;

games.findById(gameId).select("publisher").exec(function(err,doc){
    //console.log(publisher)
    res.status(200).json(doc.publisher);
})
  };



  module.exports.publisherGetOne = function (req, res) {
    var gameId=req.params.gameId;
    
    games.findById(gameId).select("publisher").exec(function(err,doc){
        //console.log(publisher)
        res.status(200).json(doc.publisher);
    })
      };




      


//  update publisher

var _deletePublisher= function(req, res, game) {
     game.publisher.remove();
      game.save(function(err, game) {
    var response= {status: 204}; 
    if (err) {
    console.log("Error finding game");
    response.status= 500;
    response.message= err;
    }
    res.status(response.status).json(response.message); });
    }

    module.exports.publisherDelete= function(req, res) {
        var gameId= req.params.gameId;
        console.log("PUT gameId ", gameId);
         games.findById(gameId).select("-reviews").exec(function(err, game) {
        var response= {status: 204};
         if (err) {
        console.log("Error finding game"); 
        response.status= 500; 
        response.status= err;
    } 
        else if(!game) {
        response.message= err;
         } else if(!game) {
            response.status=404;
            response.message= {"message" : "Game ID not found"}; 
        }
        if (response.status !== 204){

              res.status(response.status).json(response.message);
        } else {
        _deletePublisher(req, res, game);
        } });
    };

    //udating a publisher
    var _updatePublisher= function(req, res, game) {
        game.publisher.name= req.body.name;
        game.publisher.location.coordinates= [parseFloat(req.body.lng), parseFloat(req.body.lat)];
        game.save(function(err, updateGame) {
            var response= {status: 204}; 
            if (err) {
                
                    console.log("Error finding game"); 
                    response.status= 500; 
                    response.message= err;
                } 
                res.status(response.status).json(response.message);
            });
        }
        module.exports.publisherUpdate= function(req, res) {
            var gameId= req.params.gameId;
            console.log("PUT gameId ", gameId);
             games.findById(gameId).select("-reviews").exec(function(err, game) {
            var response= {status: 204};
             if (err) {
                 console.log("Error finding game");
                 response.status= 500;
                 response.message= err;
             }


                    else if(!game) {
                        response.status= 404; 
                        response.message= {"message" : "Game ID not found"};
                    }
                    if (response.status !== 204) { res.status(response.status).json(response.message);
                    } else {
                    _updatePublisher(req, res, game);
                    } 
                });
                    };
                
                