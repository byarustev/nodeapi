const UserController = require('../models/User');

const userController = function(){

};

userController.prototype.getAllUsers = function (callBack) {
    UserController.find(callBack)
};

module.exports = userController;