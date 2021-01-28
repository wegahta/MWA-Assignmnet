

var attendanceSchema=new mongoose.Schema({
    Student_id: String,
    Date:Date

})
var studentSchema=new mongoose.Schema({
    First_name:String,
    Last_name:String,
    Emaile:String,
    Student_id:String,
    attendance:attendanceSchema
})

mongoose.model("Student",studentSchema)