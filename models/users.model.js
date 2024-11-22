const { v4:uuidv4 }=require('uuid');
const users=[
    {  
       id:uuidv4(),
       name:"Nazrul Islam sajib", 
       username:"sotezsojib",
       email:"sajib@gmail.com",

    },
    {   
        id:uuidv4(),
        name:"Kamrul Islam", 
        username:"kamrulislam",
        email:"kamrul@gmail.com",
    },
] 

module.exports=users;