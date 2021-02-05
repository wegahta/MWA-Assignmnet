


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
      console.log("displaying students login");
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





        // hard  coded data 
            var student=
            [{
                "id":"5fd422b3d5ad149988baf729",
                "First_name": "wegahta",
                 "Last_name":"Gebrehawaryat",
                  "password":"wegihu"

                     },
                     {
                       "id":"5fbed15c07a5894b456a4341",
                       "First_name":"eleni",
                      "Last_name":"Gebrehawaryat", 
                      "password":"eleninatey"
                    }
                     ,{
                       "id":"5fbed15c07a5894b456a433f",
                       "First_name": "Gebrela",
                      "Last_name":"Habtemichale",
                       "password":"elanatey"
                      }
                      ]

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

        module.exports.StudentsGetOne = function (req, res) 
        {

        var response={
            status:200,
            message:{"message":"the data will be recives"}
           
        }
          var studentId= req.params.studentId;

          var oneStudent=student.filter(stu=>stu.id==studentId);
          console.log(oneStudent)
          console.log(student[2])

          if(!oneStudent){
            response.status=500;
            response.message={"message":"Invalid Student Id"}
          }
          else if(oneStudent==[]){
            response.status=400;
            response.message={"message":"A student of such id is not found"};

          }




          else {
            response.message=oneStudent

          }
          res.status(response.status).json(response.message);

        }




        module.exports.studentDelete = function (req, res) {
          const studentId=req.params.studentId;
          console.log ("deleting a student")
          console.log(studentId);
          const response={
              status:200,
              message:"Student deleted successfully with id "+studentId
          }


          var index=-1;

          var oneStudent= student.filter(stu=>{
              if(stu.studentId==studentId){
                  index++;
              }
          });



          // Student.pop(oneStudent);
          delete student[index]
          console.log(student)
          res.status(response.status).json(response.message)
      }


      module.exports.studentUpdate = function (req, res) {
        const studentId=req.params.studentId;

        const response={
          status:200,
        message:"Account Updated Successfully"
    }
         if(req.body){
       
        var oneStudent=student.filter(stu=>stu.studentId==studentId);
       
      
            // oneStudent.id=req.body.id,
            oneStudent.First_name=req.body.First_name,
            oneStudent.Last_name=req.body.Last_name,
            oneStudent.password=req.body.password
            console.log(oneStudent)
             student.push(oneStudent);

         response.message=oneStudent;
    
    }
    else{
      response.status=400;
      response.message={"message":"Student with a given id not found"}
    }
    console.log(oneStudent)
    res.status(response.status).json(response.message)
  }
      



        
                
              
              