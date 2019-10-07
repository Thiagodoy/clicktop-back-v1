const telephone = require('./telephone');
const telephone = require('./category');
const mongoose = require('mongoose');


const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });

//Definition on Schema
const CompanySchema = mongoose.Schema({
    name:{type:String,default:'', trim:true},    
    email:{type:String,default:'', trim:true},
    description:{type:String,default:'', trim:true},
    address:{type:String,default:'', trim:true},
    telephones:{type:[telephone.schema]},
    categorys:{type:[telephone.schema]},
    location:{
        type: pointSchema,
        required: true
    },
    createdAt:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Company', CompanySchema);