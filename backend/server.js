const express=require("express")
const router=require("./routes/route")
const app=express()
const connect=require("./db/db")
app.use("/",router)
app.listen(3000,()=>{
    connect()
    console.log("server running")
})
