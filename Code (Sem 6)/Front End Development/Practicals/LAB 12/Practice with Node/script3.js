let express=require("express");
let server=express;
server.listen(3000,(req,res)=>{
    res.send("Hello");
})