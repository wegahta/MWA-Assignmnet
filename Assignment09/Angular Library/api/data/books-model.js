var mongoose=require("mongoose");

var authorSchema=new mongoose.Schema({
    name:{
        type:String,
        required: false
        
    },
    sex:{
        type:String,
        required: false
    },
    numberbooks:{
        type:Number,
        required: false
    },
    country:{
        type:String,
        required: false
    }
    
});

var bookSchema= new mongoose.Schema({
    isbn:{
        type:String,
        // required:true
    },
    title:{
        type:String,
        // required:true
    },
    subtitle: String,
    published: String,
    publisher:String,
    page:Number,
    description:String,
    website:String,
    //author: authorSchema
    
})
mongoose.model("Books",bookSchema,"books");