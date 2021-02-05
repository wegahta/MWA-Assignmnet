var student=
            [{
                "id":"5fd422b3d5ad149988baf729",
                "student_id": "wegahta",
                 "Date":"12/12/2021"
                 }]


                 module.exports.attendanceGetAll=function(req,res){
                    console.log("Geting all attendance")
                    var response={
                        status:200,
                        message:student
                       // message:[{"First_name": "wegahta", "Last_name":"Gebrehawaryat", "password":"wegihu"},{"First_name":"eleni", "Last_name":"Gebrehawaryat", "password":"eleninatey"},{"First_name": "Gebrela", "Last_name":"Habtemichale", "password":"elanatey"}]
                        
                    }
                    //console.log(student.First_name);
                    res.status(response.status).json(response.message);
        
                }

                