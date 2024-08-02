/** 
 * Steps to be followed
 * 1. express server 
 * 
*/
const cors = require("cors") // cross origin 
const mongoDB = require("./utils/database")
const mongooes = require("mongoose")
const cookieParser =  require("cookie-parser")
const dotenv = require("dotenv")
const express = require("express") //step  :1
const app = express() //step : 2


const envFile = dotenv.config({
    path : '.env'
})
//origin cross cheack
const corsOption= {
    origin : ["https://netflix-clone-node.vercel.app" , "http://localhost:5173"],
    credentials  : true
}
//console.log(envFile)
//db connection/
    
    mongooes.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongo ddb connection Successfully !")
    })
    .catch((err) => {
        console.log("error", err)
    })

//mongoDB();
//routers
const userRouter = require("./router/user.route")

//middleweres
app.use(express.json()) // incoming request from the json payload
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors(corsOption))
//routes impliment
app.use("/api/v1/user" , userRouter)
app.get("/" , (req, res)=>{
    res.json({message  :"hello"})
})


app.listen(process.env.PORT , (req , res)=>{ //step :3
    console.log(`Server  created on port : ${process.env.PORT}`)
})

