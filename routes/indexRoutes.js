const express = require("express");
const router = express.Router();

const {signupUser} = require("../controllers/user-controller")


//Post /signup

router.post("/signup" , signupUser)


module.exports = router;