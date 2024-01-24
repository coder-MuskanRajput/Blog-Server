const express = require("express");
const router = express.Router();

const {
    signupUser,loginUser} = require("../controllers/user-controller")


//Post /signup

router.post("/signup" , signupUser)

//Post /login

router.post("/login" , loginUser)



module.exports = router;