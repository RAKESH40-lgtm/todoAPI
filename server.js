const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router=require('./routes/routes')


 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect("mongodb://localhost/todoApp",()=>{
    console.log("connected to db")
},(err)=>{
    console.log(err)
});

app.use(router)

app.listen(8080,()=>{
    
    console.log("Server connected succesfully at 8080")
});