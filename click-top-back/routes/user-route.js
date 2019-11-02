const express = require('express');
const {middlewareJwt,middlewareAvatarMulter} = require('../middleware/middleware')
const UserService = require('../services/user-service');
var router = express.Router();



/** 
 * @summary Authentication on System
 * @author Thiago Godoy
 * @method POST
 */
router.post('/auth', async (request, response) => {    
    try {
        const result = await UserService.auth(request);
        response.send(result);        
    } catch (e) {       
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
            console.log('request',request.body);
            if(request.file){

                let user =  await UserService.findById( request.user.id);
                user.photo = request.file.filename;
                await user.save();
                response.send(request.file);
            }else{
                response.status(500).send('Erro ao realizar o upload da imagem');
            }
        } catch (error) {                    
            response.status(500).send(error.message);
        }
});


/** 
 * @summary Load the photo of user
 * @author Thiago Godoy
 * @method GET
 * */
router.get('/avatar', [middlewareJwt], async(request, response)=>{

    try {       
        response.download(`./public/avatar/${request.query.name}`);
    } catch (error) {                    
        response.status(500).send(JSON.stringify(error));
    }
});


/** 
 * @summary Delete a user
 * @author Thiago Godoy
 * @param id
 * @method DELETE 
 */
router.delete('/:id',middlewareJwt, async(request, response)=>{   
        try {
            let result = await UserService.delete(request)
            response.send(result);
        } catch (error) {
            response.status(500).send(error.message);
        } 

});

/** 
 * @summary List a users
 * @author Thiago Godoy
 * @param limit 
 * @param offset
 * @param name 
 * @param email
 * @param loadCompany 
 * @method GET 
 */
router.get('', middlewareJwt, async (request, response) => {
    try {
       const  result = await UserService.findByEmailOrName(request);
       response.send(result);
    } catch (error) {       
        response.status(500).send(error.message);
    }
});

/** 
 * @summary Update a user
 * @author Thiago Godoy
 * @method PUT 
 */
router.put('', middlewareJwt, async (request, response) => {
    try {
        const result = await UserService.update(request);
        response.send(result);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

/** 
 * @summary Save a user
 * @author Thiago Godoy
 * @method POST
 */
router.post('', async (request, response) => {


    try {
        let userSaved = await UserService.save(request)         
        response.send(userSaved);
    } catch (e) {        
        response.status(500).send(e.message);
    }

});

module.exports = router;


