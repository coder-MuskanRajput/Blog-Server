const express = require("express");
const router = express.Router();


const {signupUser,loginUser} = require("../controllers/user-controller")
const {uploadImage , getImage} = require("../controllers/image-controller")
const {createPost , getAllPosts , getPost , updatePost , deletePost} = require("../controllers/post-controller")
const {authenticateToken} = require("../controllers/jwt-controller")
const {newComment , getComments , deleteComment} = require("../controllers/comment-controller")
const upload = require("../utils/upload")


//Post /signup
router.post("/signup" , signupUser)

//Post /login
router.post("/login" , loginUser)

//Post / file
router.post("/file/upload" ,  uploadImage);
router.get("/file/:filename" , getImage);

//Post / create
router.post("/create" , authenticateToken, createPost);

//get /posts
router.get("/posts" , authenticateToken , getAllPosts)

//get /details of post
router.get("/post/:id" , authenticateToken , getPost);

//put / edit 
router.put("/update/:id" , authenticateToken , updatePost);

// DELETE  / delete 
router.delete("/delete/:id" , authenticateToken , deletePost);

// Post /comment/new
router.post("/comment/new" , authenticateToken , newComment);

// GET /comments
router.get("/comments/:id" , authenticateToken , getComments)

//delete /comment/delete
router.delete("/comment/delete/:id" , authenticateToken , deleteComment )
module.exports = router;