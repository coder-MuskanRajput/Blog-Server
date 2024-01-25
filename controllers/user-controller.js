const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Token = require("../models/token");
require("dotenv").config({path : "./.env"});



exports.signupUser = async(req,res,next) =>{
    // console.log(req.body)
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

exports.loginUser= async (req,res,next) =>{
    
    let user = await User.findOne({email : req.body.email});

    if(!user)
    {    
        return res.status(400).json({msg : "Username does not match"})
    }
    try{

     let match =  await bcrypt.compare(req.body.password , user.password);
     if(match){
       const accessToken = jwt.sign(user.toJSON() , process.env.ACCESS_SECRET_KEY , {expiresIn : "15m"} );
       const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
      const newToken =  new Token({ token : refreshToken})
      await newToken.save();
      return res.status(200).json({accessToken : accessToken , refreshToken : refreshToken , email : user.email , user : user.username})
     }
     else{
        res.status(400).json({msg : "Password does not match"});
     }
    } catch (error) {
        return res.status(500).json({msg: "Error while login in user"})
    }
}