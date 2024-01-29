const express = require("express");
const router = express.Router();

const {signupUser,loginUser} = require("../controllers/user-controller")
const {uploadImage , getImage} = require("../controllers/image-controller")
const upload = require("../utils/upload")
//Post /signup

router.post("/signup" , signupUser)

//Post /login

router.post("/login" , loginUser)

//Post / file

router.post("/file/upload" , upload.single("file"), uploadImage);
router.get("/file/:filename",getImage);

module.exports = router;