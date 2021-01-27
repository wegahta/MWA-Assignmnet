


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