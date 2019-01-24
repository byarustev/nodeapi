const mongoose = require('mongoose');

//create schema
const userSchema = mongoose.Schema({
    firstName: {type:String},
    lastName: {type:String},
    isActive : {type:Boolean, default: false },
    createAt : {type:Date, default: Date.now()}
});

module.exports = mongoose.model('User',userSchema);
