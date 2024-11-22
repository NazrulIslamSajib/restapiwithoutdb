const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json()); 
const path=require("path"); 
////home route
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/index.html'));
})  


///user route call korci 
const userRouter=require("./routes/users.route.js"); 
app.use(userRouter);




///route not found
app.use((req,res,next)=>{
    
    res.status(404).json({
        message:"server is not found"
    })
}) 
///server error 
app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"something broke"
    })
})

module.exports=app;