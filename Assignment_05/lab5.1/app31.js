require("./api/data/db");

var express=require("express");

var path=("path");
var routes=require("./api/routes");
const bodyParser=require("body-parser");

var app=express();

app.set("port",5000);

app.use(function(req,res,next){
    console.log(req.method, req.url);
    next();
});

//app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({extended:false}));

app.use("/api",routes);

const server =app.listen(app.get("port"),function(){
    var port= server.address().port;
    console.log("Listnening to port" + port);

})



