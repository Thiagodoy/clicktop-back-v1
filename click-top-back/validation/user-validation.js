const Joi = require('@hapi/joi');

const schema = {    
    name:Joi.string().min(6).required(),    
    email:Joi.string().min(6).email().required(),
    password:Joi.string().min(6).required(),
    profile:Joi.string().min(1).required(),
    cpf:Joi.string(),
    rg:Joi.string()
    
}


module.exports =  function validate(data){
    return Joi.validate(data,schema);
}

