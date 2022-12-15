const express=require("express");
const { appLevelMiddleware,appLevelMiddleware2, routeLevel1 ,routeLevel2, routeController} = require("./middleware");
const app=express();
//app.use(appLevelMiddleware)
// App levelmiddleware

app.use(express.json());  // actually parses your json data
//app.use(appLevelMiddleware)
//app.use(appLevelMiddleware2)

//app.use(json());

app.post("/",function(req,res,next){
    console.log(req.body);

    res.send("Hello world");

})



app.get("/",function(req,res,next){

    res.send("Hello world");

})





app.get("/hello",routeLevel1,routeLevel2,function(req,res,next){

    res.send("From controller")

})



app.listen(8080,()=>{
    console.log("Server Started");
})

// Types of middleware

// App level middleware

// routes level middleware
// route level middleware
// error middleware