const express=require("express")
const app=express()
const cors=require("cors")
const todo=require("../models/model")
app.use(express.json())
app.use(cors())
app.get("/",async (req,res)=>{
    const data=await todo.find({})
    res.send(data)
})
app.post("/add",async(req,res)=>{
    const data=await todo.create(req.body)
    res.send("sent")
})
app.put("/update/:id",async(req,res)=>{
    const data=await todo.findByIdAndUpdate(req.params.id,req.body)
    res.send(data)
})
app.delete("/dele/:id",async(req,res)=>{
    const data= await todo.findByIdAndDelete(req.params.id)
    res.send("done")
})
module.exports=app