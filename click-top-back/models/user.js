const mongoose = require('mongoose');

//Definition on Schema
const UserSchema = mongoose.Schema({
    firstName:{type:String,default:'', trim:true},
    lastName:{type:String,default:'', trim:true},
    email:{type:String,default:'', trim:true},
    password:{type:String,default:'', trim:true},
    createdAt:{type:Date,default:new Date()}
});

module.exports = mongoose.model('User', UserSchema);