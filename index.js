const express=require("express");
const fs=require('fs');

const app=express();
const port=4000;

// handler function 
//  function hello(req,res,next){
// res.send("Hello!!!")
// }
// route.get("/",anyfunction);

// some route 
app.get("/",/*handle request*/(req,res)=>{
    fs.readFile("./pages/index.html",(err,data)=>{
        if(err){
            console.log("err",err);
            res.send("<h1>somthing wrong</h1>")
        }
        else{
            res.write(data)
            res.end()
        }
    });
})
app.get("/about",/*handle request*/(req,res)=>{
    fs.readFile("./pages/about.html",(err,data)=>{
        if (err){
            console.log("err",err);
            res.send("<h1>somthing wrong</h1>")
        }
        else{
            res.write(data);
            res.end();
        }
    })
})
app.get("/service",/*handle request*/(req,res)=>{
    fs.readFile("./pages/services.html",(err,data)=>{
        if(err){
            console.log("err",err)
            res.send("<h1>somthing wrong</h1>")
        }
        else{
            res.write(data)
            res.end();
        }
    })
})

// some route 
app.listen(port,()=>{
    console.log("my server is running")
})