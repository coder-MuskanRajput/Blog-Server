require("dotenv").config({path : "./.env"})
const express = require("express")
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const Router = require("./routes/indexRoutes")
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
app.use('/' , Router)

//routes

app.use("/" , require("./routes/indexRoutes"));

app.listen (process.env.PORT , console.log(`server running on port ${process.env.PORT}`))