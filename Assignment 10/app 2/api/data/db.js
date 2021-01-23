var mongoose=require("mongoose");
require("./jobs-model.js");
var dbURL="mongodb://localhost:27017/JobSearchDB";
mongoose.connect(dbURL);
mongoose.connect(dbURL, {useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on("connected",function(){
    console.log("connected to mongoose")

});
mongoose.connection.on("disconnected",function(){
    console.log("mongoose is disconnected")

})