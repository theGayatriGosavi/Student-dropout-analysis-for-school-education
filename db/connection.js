const mongoose=require("mongoose");

mongoose.connect("").then(()=>{
    console.log("database connected");
}).catch((e)=>{
    console.log("no connection");
});