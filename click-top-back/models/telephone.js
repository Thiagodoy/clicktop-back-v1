const mongoose = require('mongoose');

//Definition on Schema
const TelephoneSchema = mongoose.Schema({
    value:{type:String,default:'', trim:true},    
    type:{type:String,default:'HOME',trim:true},
    createdAt:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Telephone', TelephoneSchema);