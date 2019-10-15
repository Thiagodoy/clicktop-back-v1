const Joi = require('@hapi/joi');

const schema = {    
    name:Joi.string().min(6).required(),    
    email:Joi.string().min(6).email().required(),
    password:Joi.string().min(6).required(),
    
}


module.exports =  function validate(data){
    return Joi.validate(data,schema);
}

