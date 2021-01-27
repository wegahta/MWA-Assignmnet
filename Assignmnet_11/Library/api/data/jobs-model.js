var mongoose = require("mongoose");


var locationSchema=new mongoose.Schema({
       city:String,
       state:String
});

var jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    salary: Number,
    description: String,
    skill: String,
    exprince:String,
    postData: String,
    location: locationSchema
    })

   mongoose.model("Jobs",jobSchema,"jobopening");

