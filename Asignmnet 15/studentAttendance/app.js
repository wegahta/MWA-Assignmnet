var express=require("express");
var path=require("path");
const routes=require("./api/routes");
var bodyParser=require("body-parser")
var app=express();

app.set("port",3000);


app.use(function(req,res,next){
    console.log(req.method, req.url);
    next();
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));


app.use("/api",function( req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:4200");  
 // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.use("/api", routes);




const server =app.listen(app.get("port"),function(){
    var port= server.address().port;
    console.log("Listnening to port" + port);
})