const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config()
const port = process.env.PORT || 8080
const mode = process.env.NODE_MODE

//rest object
const app = express();

connectDB();

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/user", require("./routes/userRoutes"))


//listen port
app.listen(port,  function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
});
   