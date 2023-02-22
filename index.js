const express=require("express")

const app=express();
const port=4000;

// handler function 
//  function hello(req,res,next){
// res.send("Hello!!!")
// }
// route.get("/",anyfunction);


app.get("/",/*handle request*/(req,res)=>{
    res.send("Hello Hasan")
})
app.listen(port,()=>{
    console.log("my server is running")
})