require("./api/data/db");
var bodyParser=require("body-parser");
var express=require("express");
var route=require("./api/route");
var path=require("path");
var app=express();
app.set("port", 8000);

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
})
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api", route);
app.use(express.static(path.join(__dirname, "public")));
app.use("/node_modules",express.static(path.join(__dirname, "node_modules")));
app.use(bodyParser.json());


const server=app.listen(app.get("port"), function(){
      console.log("listing to port nuber"+ server.address().port);
    app.use(express.static(path.join(__dirname, "public")));

});