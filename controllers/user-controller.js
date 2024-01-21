const User = require("../models/user")
const bcrypt = require("bcrypt");

exports.signupUser = async(req,res,next) =>{
    console.log(req.body)
    try {
        // const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password,10);

        const user = {username : req.body.username , email : req.body.email, password : hashedPassword};
       const newUser = new User(user);
       await newUser.save();
       return res.status(200).json({msg : "Signup Successfully"})
    } catch (error) {
        return res.status(500).json({msg : "Error while signup the user"})
    }
}