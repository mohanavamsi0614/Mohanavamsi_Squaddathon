const mongoose=require("mongoose")
const dot=require("dotenv").config()
async function conn(){
    await mongoose.connect(process.env.uri)
    console.log("database connected")
}
module.exports=conn