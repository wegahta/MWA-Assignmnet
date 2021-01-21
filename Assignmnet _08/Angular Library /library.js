
require("./api/data/db");
var express = require("express");
const bodyParser = require("body-parser");

var path = require("path");
var routes =require("./api/routes");



//var ObjectId= require("mongodb").ObjectId;
//var title= require("mongodb").title;
//require("./api/data/dbconnection").openConnection();
//require("./api/data/db");

const app = express();
//app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));

app.set("port", 3000); 

// interceptor - logging
//app.use(express.static(path.join(__dirname, "public")));
app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
})
app.use("/node_modules",express.static(path.join(__dirname, "node_modules")));
//app.use(bodyParser.json);

// serving static page
app.use(express.static(path.join(__dirname, "public")));



app.use("/api", routes);


const server = app.listen(app.get("port"), function(){
    console.log("Listening to port " + server.address().port);
})