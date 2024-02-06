
const Comment = require("../models/comment")

exports.newComment = async(req , res) =>{
    try {
     const comment = await new Comment(req.body);
     comment.save();
     res.status(200).json({msg:"Comment saved Successfully"})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

exports.getComments = async(req,res)=>{
    try {
      const comments =  await Comment.find({ postId : req.params.id })
      res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

exports.deleteComment = async(req,res) =>{
    try {
        const comment = await Comment.findById(req.params.id);
        await comment.delete();

        res.status(200).json({msg: "Comment deleted successfully"})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}