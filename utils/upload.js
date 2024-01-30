const {GridFsStorage} = require("multer-gridfs-storage");
const multer  = require("multer")
require("dotenv").config({path : "./.env"});


const storage = new GridFsStorage({

    url : process.env.MONGODB_URL,
    file : (request,file)=>{
        const match = ["image/png" ,"image/jpg"];
        if (match.indexOf(file.memeType) === -1){
            return `${Date.now()}-blog-${file.originalname}`;
        }
        return {
            bucketName : "photos",
            filename :`${Date.now()}-blog-${file.originalname}`
        }
    }
})

module.exports= multer({storage});