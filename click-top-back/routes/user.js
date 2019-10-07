const express = require('express');
const validateUser = require('../validation/user-validation');
const validateLogin = require('../validation/login-validation');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const verifyToken = require('../middleware/middleware')

var router = express.Router();

/** 
 * @summary Authentication on System
 * @author Thiago Godoy
 * @method POST
 */
router.post('/auth', async (request, response) => {


    try {
        
        const { error } = validateLogin(request.body);
        if (error) return response.status(400).send(error.details[0].message);


        const user = await User.find({
            email: request.body.email
        });
       
        if (user.length == 0) return response.status(404).send('Email inválido!');

        const validPass =  await bcrypt.compare(request.body.password, user[0].password)
        if (!validPass) return response.status(404).send('Password inválido!');

        const token =  await jwt.sign(request.body, process.env.TOKEN_SECRET, { expiresIn: '1h' });

        const res = { user:user[0],token};

        response.send(res);


    } catch (e) {
        console.error(e);
        response.status(500).send(e.message);
    }   

});

/** 
 * @summary List a users
 * @author Thiago Godoy
 * @method GET 
 */
router.get('',verifyToken, (request, response) => {

    response.send('Teste')
});

/** 
 * @summary Update a user
 * @author Thiago Godoy
 * @method PUT 
 */
router.put('', (request, response) => {});

/** 
 * @summary Save a user
 * @author Thiago Godoy
 * @method POST
 */
router.post('', async (request, response) => {  


    try {
        const {
            error
        } = validateUser(request.body);
        if (error) return response.status(400).send(error.details[0].message);


        const userExists = await User.find({
            email: request.body.email
        });
        if (userExists && userExists.length > 0) return response.status(400).send('Usuário já cadastrado!');

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(request.body.password, salt);
        const user = new User({
            ...request.body
        });

        user.password = password;


        let userSaved = await user.save();
        response.send(userSaved._id);
    } catch (e) {
        console.log(e);
        response.status(500).send(e);
    }

});

module.exports = router;