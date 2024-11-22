let users=require('../models/users.model.js');  ///const dile push korte parbo na ei jonno let dite hbe . 

const getData=(req,res)=>{
    res.status(200).json({users})
}    
const { v4:uuidv4 }=require('uuid');
const createUser=(req,res)=>{ 

    const newUser={ 
        id:uuidv4(), 
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
    } 
    users.push(newUser);
    res.status(200).json(users)
}

module.exports={getData,createUser};