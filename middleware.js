const appLevelMiddleware=(req,res,next)=>{

    console.log("hello middleware");
    // any operation 
    // we can pass the request control to the next middleware in line 
    next();


}

const appLevelMiddleware2=(req,res,next)=>{

    console.log("hello middleware2");
    // any operation 
    // we can pass the request control to the next middleware in line 
    next();


}

const routeLevel1=(req,res,next)=>{

    console.log("route middleware1");
    //res.send("From the route level 1")
    //return ;
    next();

}

const routeLevel2=(req,res,next)=>{

    console.log("route middleware 2");
    next();

}

const routeController=(req,res,next)=>{

}


module.exports={
    appLevelMiddleware,
    appLevelMiddleware2,
    routeLevel1,
    routeLevel2,
    routeController

}


// You have to write a middleware to encrypt a password,and then pass the flow to the next middleware or controller