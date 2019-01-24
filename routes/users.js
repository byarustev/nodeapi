const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const userController = new UserController();

router.get('/users',(req,res)=>{
    //first parameter err is only returned once there is an error
    userController.getAllUsers(function(err,users){
        if (err) res.sendStatus(500).json({message:err.message});
        res.send(users);
    })
});

module.exports(router);