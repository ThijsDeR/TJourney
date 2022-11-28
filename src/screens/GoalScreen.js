import React from "react";

const express= require("express")
const app = express();
const mongoose= require("mongoose");
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/mynewdb", {
    useNewUrlParse:true,
    UseUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log("connected to db");
    }else{
        console.log("error");
    }
})

const schema={
    goal:String
}

const monmondel=mongoose.model("ChallengeMS",schema)
app.post("/goal", async(req,res)=>{
    console.log("inside post");
    
})


app.listen(8000,()=>{
    console.log("kkffk");
})