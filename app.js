require("dotenv").config({path : "./.env"})
const express = require("express")
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const Router = require("./routes/indexRoutes")
const fileUpload = require("express-fileupload")
// import Router from("./routes/indexRoutes")

//Db Connection

require("./models/database").connectDatabase();

// to connect with same server
app.use(cors());

// logger 

const logger = require("morgan");
app.use(logger("tiny"))


// parsing
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended:true}))
// app.use('/' , Router)

app.use(fileUpload())

//routes

app.use("/" , Router);

app.listen (process.env.PORT , console.log(`server running on port ${process.env.PORT}`))