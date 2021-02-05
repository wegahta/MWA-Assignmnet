var mongoose=require("mongoose");

var studentSchema=new mongoose.Schema({
      student_id:String,
      Date: Date

})


var userSchema=new mongoose.Schema({

    First_name:String,
    Last_name:String,
    Student_id:String,
    password:String

})

     mongoose.model("Student",userSchema)