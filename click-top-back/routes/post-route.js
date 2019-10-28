const express = require('express');
const {
        middlewareJwt,
        middlewarePostMulter
} = require('../middleware/middleware')
const router = express.Router();
const PostService = require('../services/post-service');



/** 
 * @summary Save a post that is associate a company
 * @author Thiago Godoy
 * @method POST
 * */
router.post('', [middlewareJwt, middlewarePostMulter.single('image')], async (request, response) => {


        try {

                if (request.file) {
                        const result = await PostService.save(request, request.file.filename);
                        response.send(result);
                } else {
                        response.status(500).send('Erro ao realizar o upload da imagem');
                }


        } catch (error) {
                response.status(500).send(error.message);
        }


});

/**
 * @summary List a post
 * @author Thiago Godoy
 * @param  key 
 * @param  companyId
 * @param  limit
 * @param  size  
 * @method GET        
 */
router.get('', [middlewareJwt], async (request, response) => {

        try {
                const result = await PostService.list(request);
                response.send(result);
        } catch (error) {
                response.status(500).send(error.message);
        }

});


/**
 * @author Thiago Godoy
 * @summary Get a image tha associate with a post
 * @param name name of file
 * @method GET
*/
router.get('/image', [middlewareJwt], async (request, response) => {
   try {       
        response.download(`./public/post/${request.query.name}`);
    } catch (error) {                    
        response.status(500).send(JSON.stringify(error));
    }
});



/**
 * @summary Delete a post
 * @author Thiago Godoy
 * @param id
 * @method DELETE  [middlewareJwt]
 */
router.delete('/:id', async (request, response) => {
        try {
                await PostService.delete(request);
                response.send();
        } catch (error) {
                response.status(500).send(error.message);
        }

});


module.exports = router;