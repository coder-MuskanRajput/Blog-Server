const express = require("express");
const router = express.Router();

const {signupUser,loginUser} = require("../controllers/user-controller")
const {uploadImage , getImage} = require("../controllers/image-controller")
const {createPost} = require("../controllers/post-controller")
const {authenticateToken} = require("../controllers/jwt-controller")
const upload = require("../utils/upload")
//Post /signup

router.post("/signup" , signupUser)

//Post /login

router.post("/login" , loginUser)

//Post / file

router.post("/file/upload" , upload.single("file"), uploadImage);
router.get("/file/:filename" , getImage);

//Post / create
router.post("/create" , authenticateToken, createPost);

module.exports = router;