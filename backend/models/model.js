const express=require("express")
const mongoose=require("mongoose")
const schemma=new mongoose.Schema({
    todo:String
})
const todo=mongoose.model("todo",schemma)
module.exports=todo
