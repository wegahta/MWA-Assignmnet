var mongoose=require("mongoose");
var Student=mongoose.model("Student");

module.exports.addressGetAll = function (req, res) {
var studentId=req.params.studentId;
Student.findById(studentId).select("address").exec(function(err,doc){
    res.status(200).json(doc.address);
})
  };


  module.exports.addressGetOne = function (req, res) {
    var studentId = req.params.studentId;
    var addressId=req.params.addressId;
    console.log("GET addressId "+addressId+ " for Student "+studentId);
    Student.findById(studentId).select("address").exec(function (err, addresses) {
      console.log(addresses);
      var address=addresses.address.id(addressId);
        var response = {
        status: 200,
        message: address,
      };
      if (err) {
        console.log("Error finding  in address");
        response.status = 500;
        response.message = err;
      } else if (!address) {
        response.status = 404;
        response.message = { message: "Address ID is not foud" };
      }
      res.status(response.status).json(response.message);
    });
  };