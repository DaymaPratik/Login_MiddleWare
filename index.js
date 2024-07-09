const express=require("express");
const morgan = require('morgan');
const app =express();
//This is use to convert the body content into josn format 
app.use(express.json());
// Create a custom Morgan format to include response time
morgan.token('date', () => new Date().toISOString());
const format = ':response-time ms';
// Use the custom format
app.use(morgan(format));
const loggerInfo=(req,res,next)=>{
    console.log("Pratik Dayma's MINI Projects");
    console.log("MiddleWare Loging Get AllDetails Of Request");
    console.log(`Request Method Tpye :- ${req.method}`);
    console.log(`Request Url :- ${req.url}`);
    console.log(`Request Time Stamp :- ${Date.now()}`);
    next();
}
app.use(loggerInfo);
app.get("/login",(req,res)=>{
    return res.json({
        suces:true,
        message:"Login api called"
    })
})
app.listen(10000,()=>console.log("Server is Runnig"));