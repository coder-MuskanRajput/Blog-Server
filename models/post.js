const mongoose = require("mongoose");;

const postSchema  = mongoose.Schema ({
   
    title : {
    type : String,
    required : true,
    unique : true
    },
    description :{
        type : String ,
        required : true
    },
    picture :{
        type: Object ,
            default : {
                fileId :"",
                url : "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        required: false ,
    },
    username :{
        type:String,
        required: true ,
    },
    categories :{
        type:String,
        required: true ,
    },
    createdDate :{
        type: Date,
    }
})

const post  =  mongoose.model ("post" , postSchema)
module.exports = post