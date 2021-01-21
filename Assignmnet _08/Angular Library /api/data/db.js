var mongoose=require("mongoose");
require("./books-model.js")
var dbURL="mongodb://localhost:27017/Library";
mongoose.connect(dbURL);
mongoose.connect(dbURL, {useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on("connected",function(){
    console.log("Mongoose connected to "+dbURL);
});
mongoose.connection.on("diconnected",function(){
    console.log("Mongoose disconnected");
});
mongoose.connection.on("error",function(err){
    console.log("Mongoose connection error "+err)
})

process.on("SIGINT",function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected by app termination");
        process.exit(0);
    })
})

process.on("SIGTERM",function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected by app termination");
        process.exit(0);
    })
})

process.once("SIGUSR2",function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected by app termination");
        process.kill(process.pid,"SIGUSR2");
    })
})
