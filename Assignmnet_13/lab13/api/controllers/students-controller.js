


 const { response, json } = require("express");
const path=require("path");
 const dispatchPage=function(pageName, res){
    const response={
        status:200,
        message: "Index page"
       }
    res.status(response.status).sendFile(path.join(__dirname, "..","..","public","student_pages",pageName+".html"));
 }
    
    
   module.exports.studentsIndex=function(req, res){
    console.log("are you  reached here")

    dispatchPage("index",res);
    
    }

     

    module.exports.studntsCreate=function(req,res){
        dispatchPage("create_profile", res);


    }

    // method for student login
    module.exports.studntsLogin=function(req,res){
        dispatchPage("student_login", res);


    }
    module.exports.wellcomepage=function(req,res){
        dispatchPage("wellcome", res);


    }
    module.exports.successCreated=function(req,res){
        dispatchPage("success", res);


    }
    module.exports.logdin=function(req,res){
        dispatchPage("logdin", res);


    }
    module.exports.updateStudent=function(req,res){
        dispatchPage("update", res);


    }
    module.exports.removeStudent=function(req,res){
        dispatchPage("remove", res);


    }
       module.exports.facultyIndex=function(req, res){
    console.log("are you  reached here")

    dispatchPage("faculty",res);
    
    }

    module.exports.manageQr=function(req, res){
        console.log("are you  reached here")
    
        dispatchPage("manageQr",res);
        
        }
            var student=
            [{
                "id":"5fd422b3d5ad149988baf729",
                "First_name": "wegahta",
                 "Last_name":"Gebrehawaryat",
                  "password":"wegihu"

                     }]

         // working with Api from this level
        module.exports.studentsGetAll=function(req,res){
            console.log("Geting all students")
            var response={
                status:200,
                message:student
               // message:[{"First_name": "wegahta", "Last_name":"Gebrehawaryat", "password":"wegihu"},{"First_name":"eleni", "Last_name":"Gebrehawaryat", "password":"eleninatey"},{"First_name": "Gebrela", "Last_name":"Habtemichale", "password":"elanatey"}]
                
            }
            //console.log(student.First_name);
            res.status(response.status).json(response.message);

        }
        module.exports.studentAddOne = function (req, res) {
            console.log("Post to add a game");


            if (req.body) {
              console.log(req.body.First_name);
             var newstudent={
                 id:req.body.id,
                First_name:req.body.First_name,
                Last_name:req.body.Last_name,
                password:req.body.password
              }
              //res.message=newstudent
              student.push(newstudent);
              

            }
            console.log(newstudent);
            res.status(200).json(newstudent);
        }

  

        module.exports.studentDeleteOne = function (req, res) {
            var studentId = req.params.studentId;
            console.log("DELETE A Student ", studentId);
        
             
             student.find(studentId).exec(function (err, deletedStudent){
              var response = { 
                  status: 200,
                  message:deletedStudent 
                };
              if (err) {
                console.log("Error finding Student");
                response.status = 500;
                response.message = err;
              } else if (!deletedStudent) {
                response.status = response.message = { message: "Student ID not found" };
              } else {
                res.status(response.status).json(response.message);
              }
            });
          };
     
              module.exports.updateStudent=function(req, res){
                var studentId=req.params.studentId;
                
              }
                
              
              