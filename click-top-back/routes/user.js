const  express = require('express');
const validateUser = require('../validation/user-validation');
const validateLogin = require('../validation/login-validation');
const jwt = require('jsonwebtoken');

var router = express.Router();

router.post('/login', async (request,response)=>{


    const {error} = validateLogin(request.body);
    if(error) return response.status(400).send(error.details[0].message);

    const token =  jwt.sign(request.body,process.env.TOKEN_SECRET);

    response.send(token);

});

router.post('/register', (request,response)=>{

    const {error} = validateUser(request.body);
    if(error) return response.status(400).send(error.details[0].message);

    response.send('Criado com sucesso!');

});

module.exports = router;

