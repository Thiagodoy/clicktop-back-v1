const express = require('express');
const validateUser = require('../validation/user-validation');
const validateLogin = require('../validation/login-validation');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {middlewareJwt,middlewareAvatarMulter} = require('../middleware/middleware')
const { sequelize } = require('../data/index')

const UserController = require('../controllers/user-controller');

var router = express.Router();



/** 
 * @summary Authentication on System
 * @author Thiago Godoy
 * @method POST
 */
router.post('/auth', async (request, response) => {


    try {

        const {
            error
        } = validateLogin(request.body);
        if (error) return response.status(400).send(error.details[0].message);


        const user = await UserController.findByEmail(request.body.email);

        if (user.length == 0) return response.status(404).send('Email inválido!');

        const validPass = await bcrypt.compare(request.body.password, user[0].password)
        if (!validPass) return response.status(404).send('Password inválido!');

        let userTemp = {
            email: user[0].email,
            name: user[0].name,
            id: user[0].id
        };


        const token = await jwt.sign(userTemp, process.env.TOKEN_SECRET, {
            expiresIn: '1h'
        });

        const res = {
            user: user[0],
            token
        };

        response.send(res);


    } catch (e) {
        console.error(e);
        response.status(500).send(e.message);
    }

});

/**
 * @summary Save a photo
 * @author Thiago Godoy
 * @method POST
 */
router.post('/avatar', [middlewareJwt, middlewareAvatarMulter.single('image')], async(request, response)=>{


        try {
            if(request.file){

                let user =  await UserController.findById( request.user.id);
                user.photo = request.file.filename;
                let result = await UserController.update(user);

                response.send(request.file);
            }else{
                response.status(500).send('Erro ao realizar o upload da imagem');
            }
        } catch (error) {
            console.log(error)            
            response.status(500).send(error.message);
        }
});


/** 
 * @summary Delete a user
 * @author Thiago Godoy
 * @method DELETE 
 */

router.delete('/:id',middlewareJwt, async(request, response)=>{   

        try {
            let result = await UserController.delete(request.params.id)
            response.send(result);
        } catch (error) {
            response.status(500).send(JSON.stringify(error));
        }
    

});

/** 
 * @summary List a users
 * @author Thiago Godoy
 * @method GET 
 */
router.get('', middlewareJwt, async (request, response) => {

    try {

        let map = new Map();       

        map.set('name', request.query.name);
        map.set('email', request.query.email);
        map.set('offset', request.query.offset);
        map.set('limit', request.query.limit);
        map.set('loadCompany', request.query.loadCompany)

        result = await UserController.findByEmailOrName(map);

        response.send(result);

    } catch (error) {
        console.error(error);
        response.status(500).send(error);
    }



});

/** 
 * @summary Update a user
 * @author Thiago Godoy
 * @method PUT 
 */
router.put('', middlewareJwt, (request, response) => {});

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


        const userExists = await UserController.findByEmail(request.body.email);

        if (userExists && userExists.length > 0) return response.status(400).send('Usuário já cadastrado!');

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(request.body.password, salt);

        const user = {
            ...request.body
        };

        user.password = password;
        user.email = user.email.toUpperCase();
        user.name = user.name.toUpperCase();

        let userSaved = await UserController.save(user);
        response.send(userSaved._id);
    } catch (e) {
        console.log(e);
        response.status(500).send(e);
    }

});

module.exports = router;