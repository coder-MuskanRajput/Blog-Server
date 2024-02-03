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
        type:String,
        require: false ,
    },
    username :{
        type:String,
        require: true ,
    },
    categories :{
        type:String,
        require: true ,
    },
    createdDate :{
        type: Date,
    }
})

const post  =  mongoose.model ("post" , postSchema)
module.exports = post