
const Post =  require("../models/post")

exports.createPost = async (req, res) =>{
   try {
    const post = await new Post(req.body);
    post.save();

    return res.status(200).json("Post saved successfully")
   } catch (error) {
       return res.status(500).json(error);
   }
}