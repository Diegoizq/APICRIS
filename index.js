const express = require("express")
const connectDB = require("./config/db")
const router = require("./routes/router")
const app = express()
app.use(express.json())
require("dotenv").config()

//http://localhost:3000/api
app.use('/api', router)

connectDB()
let PORT = process.env.PORT



app.listen(PORT || 3000, ()=>{
    console.log(`Esta conectado en el puerto: ${PORT} mi bro`);


})