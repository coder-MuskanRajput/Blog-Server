
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