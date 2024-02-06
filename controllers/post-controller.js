
const Post =  require("../models/post")

exports.createPost = async (req, res) =>{
   try {
    const post = await new Post(req.body);
    post.username = req.user.username;
    post.save();
    return res.status(200).json("Post saved successfully")
   } catch (error) {
       return res.status(500).json(error);
   }
}

exports.getAllPosts = async (req,res) =>{
    let category = req.query.category;
    let posts ;
    try {
        if (category){
          posts = await Post.find({categories : category})
        }else{
        posts = await Post.find({})
        }
    //   console.log('posts', posts)
      return res.status(200).json(posts);
    } catch (error) {
        console.log('error', error)
        return res.status(500).json({msg : error.message})
    }
}

exports.getPost = async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


exports.updatePost = async (req,res) =>{
      try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({msg : "Post not found"});
        }
        await Post.findByIdAndUpdate (req.params.id , {$set : req.body})
        return res.status(200).json({msg : "Post updated successfully"})
      } catch (error) {
        return res.status(500).json({msg: error.message})
      }
}

exports.deletePost = async (req, res) =>{
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        // if(!post){
        //     return res.status(404).json({msg : "Post not found"});
        // }
        // await post.();
        return res.status(200).json({msg : "Post deleted Successfully"})
    } catch (error) {
        return res.status(500).json({msg : error.message})
    }
}