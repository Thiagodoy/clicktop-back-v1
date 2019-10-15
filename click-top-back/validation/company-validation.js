const Joi = require('@hapi/joi');

const schema = {    
    
}


module.exports =  function validate(data){
    return Joi.validate(data,schema);
}

