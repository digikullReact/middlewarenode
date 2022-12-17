const express=require("express");
const cors=require("cors");

const { appLevelMiddleware,appLevelMiddleware2, routeLevel1 ,routeLevel2, routeController} = require("./middleware");
const app=express();
//app.use(appLevelMiddleware)
// App levelmiddleware
app.use(cors());
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

app.get("/api",function(req,res){
    res.json({
        msg:"Success From The Api HEre"
    })
})











app.listen(8080,()=>{
    console.log("Server Started at port "+8080);
})

// Types of middleware

// App level middleware

// routes level middleware
// route level middleware
// error middleware