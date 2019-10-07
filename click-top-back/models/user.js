const mongoose = require('mongoose');
const telephone = require('./telephone');

//Definition on Schema
const UserSchema = mongoose.Schema({
    firstName:{type:String,default:'', trim:true},
    lastName:{type:String,default:'', trim:true},
    email:{type:String,default:'', trim:true},    
    type:{type:String,default:'CLIENT'},
    status:{type:String,default:'ACTIVE'},
    company:{type:mongoose.Schema.Types.ObjectId,ref:'Company', default:undefined},
    telephones:{type:[telephone.schema]},
    password:{type:String,default:'', trim:true},
    createdAt:{type:Date,default:Date.now}
});

module.exports = mongoose.model('User', UserSchema);