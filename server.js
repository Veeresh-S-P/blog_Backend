require("dotenv").config()

const express=require("express")

const cors=require("cors")

const{connection}=require("./database/db")
const{userRoute}=require("./routes/user.route")
const{blogRoute}=require("./routes/blog.route")
const { connections } = require("mongoose")

const app=express()

app.use(express.json());
app.use(cors());


app.get("/",async(req,res)=>{
    console.log("This is the backend home page")
})

app.use("/",userRoute)
app.use("/",blogRoute)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to database")

    } catch (error) {
        console.log(error.message)
    }
    console.log(`server is running at ${process.env.port}`)
})