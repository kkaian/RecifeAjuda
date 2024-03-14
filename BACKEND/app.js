const express = require("express")
const cors = require("cors")
const port = 3000

require("dotenv").config()

const app = express()


app.use(cors())
app.use(express.json())

//db connection

const conn = require("./db/conn");

conn(); 


//routes

const routes = require("./routes/router");



app.use("/api", routes); 

app.listen(port, function(){
    console.log("Servidor em funcionamento");
})