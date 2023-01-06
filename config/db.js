require('dotenv').config();
const mongoose = require('mongoose')
const colors =  require('colors')

const connectDB = async() =>{
    try {
         await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser: true
        })
        console.log(`Mongoose connected to ${mongoose.connection.host}`.bgGreen.white)
    } catch (error) {
        console.log(`Mongodb Server Issue ${error}`.bgRed.white)
    }
}

module.exports = connectDB;