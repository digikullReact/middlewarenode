const express=require("express");
const { appLevelMiddleware,appLevelMiddleware2, routeLevel1 ,routeLevel2, routeController} = require("./middleware");
const app=express();
require("dotenv").config()

//app.use(appLevelMiddleware)
// App levelmiddleware

app.use(express.json());  // actually parses your json data
//app.use(appLevelMiddleware)
//app.use(appLevelMiddleware2)

//app.use(json());

app.use(express.static("dist"))


/*
app.get("/api",function(req,res,next){
    console.log(req.body);

    res.send("Hello world");

})
*/


app.get("*",function(req,res,next){

    res.sendFile(__dirname+"/dist/index.html");



})











const port=process.env.PORT || 8090;

app.listen(port,()=>{
    console.log("Server Started at port "+8090);
})

// Types of middleware

// App level middleware

// routes level middleware
// route level middleware
// error middleware