// const grid = require('gridfs-stream');
// const mongoose = require("mongoose");

// const url = 'http://localhost:8080'

// let gfs , gridfsBucket;
// const conn = mongoose.connection;
// conn.once("open", () => {
//     gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db , {
//         bucketName : 'fs'
//     });
//     gfs = grid(conn.db ,mongoose.mongo);
//     gfs.collection('fs');
// })


// exports.uploadImage = (req, res ) =>{
//         if(!req.file){
//             return res.status(404).json({msg : "File not found"})
//         }
//         const imageUrl = `${url}/file/${req.file.filename}`
//         return res.status(200).json(imageUrl)   
// }


const path = require("path");
const post = require("../models/post");

const imagekit = require("../utils/imagekit").initImagekit();


exports.getImage = async (req,res) =>{
  try {
   const file =  await post.files.findOne({filename : req.params.filename})
  //  const readStream = gridfsBucket.openDownloadStream(file._id);
   readStream.pipe(res);
  } catch (error) {
    return res.status(500).json({msg: error.message})
  }
}
exports.uploadImage= async (req,res,next) =>{
  console.log(req.file , req.files);
  const file = req.files.file;
  const modifiedFileName =`blogPost-${Date.now()}${path.extname(file.name)}`;
  
  
  // purani file delete krke new file update krne k liye
  
  // if(employee.organizationLogo.fileId !== ""){
    //     await imagekit.deleteFile(employee.organizationLogo.fileId);
    //  }

  ///
  const {fileId , url} = await imagekit.upload({
      file : file.data,
      fileName : modifiedFileName
  });
  // employee.organizationLogo = {fileId , url};
  // await employee.save();
  // res.json({image});

        return res.status(200).json({url : url , fileId : fileId})   

  }
