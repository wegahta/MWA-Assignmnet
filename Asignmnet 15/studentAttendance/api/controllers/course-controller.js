var courses=[{
    id:"cs572",
    title:"Modern_Web_Application",
    credit:"4"
},
{
    id:"cs544",
    title:"Enterprise Arctectecture",
    credit:"4"
},{
    id:"cs545",
    title:"Web Frame Work Arctecture",
    credit:"4"
}]

module.exports.coursesGetAll=function(req,res){
    console.log("Geting all courses")
            var response={
                status:200,
                message:courses
              
                
            }
            console.log(courses)
            res.status(response.status).json(response.message);
}