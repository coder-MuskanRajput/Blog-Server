
const jwt = require("jsonwebtoken");
require("dotenv").config({path : "./.env"});


exports.authenticateToken = (req,res,next)=>{
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if(token == null){
    return res.status(401).json({msg : "Token is missing"})
  }

  jwt.verify(token , process.env.ACCESS_SECRET_KEY ,(error , user) =>{
       if(error){
        return res.status(403).json({msg: "invalid token"})
       }

       req.user = user; 
       next();
  } )
}