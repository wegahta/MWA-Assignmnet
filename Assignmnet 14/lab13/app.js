var express=require("express");
var path=require("path");
const routes=require("./api/routes");
var bodyParser=require("body-parser")
var app=express();

app.set("port",4000);


// app.use(function(req,res,next){
//     console.log(req.method, req.url);
//     next();
// });
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", routes);




const server =app.listen(app.get("port"),function(){
    var port= server.address().port;
    console.log("Listnening to port" + port);
})