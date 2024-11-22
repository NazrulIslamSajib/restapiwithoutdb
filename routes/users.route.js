const express=require('express');
const router=express.Router();
const { getData, createUser} = require('../controllers/users.controller.js');
///users route

router.get("/users",getData); 
router.post("/users",createUser);

module.exports=router;
