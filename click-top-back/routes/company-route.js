const express = require('express');
const {middlewareJwt,middlewareGaleryMulter} = require('../middleware/middleware')
const companyValidation = require('../validation/company-validation');

var router = express.Router();
const CompanyService = require('../services/campany-service');



/** 
 * @summary Save a company
 * @author Thiago Godoy
 * @method POST
 */
router.post('',  async (request, response) => {


    try {    
        const result = await CompanyService.save(request,response);
     
        if(result){
            response.send();
        }else{
           response.status(500).send('Não foi possivel salvar a compania');     
        }

    } catch (error) {
        response.status(500).send(error.message);
    }
    
});

/** 
 * @summary List companys
 * @author Thiago Godoy
 * @method GET 
 */
router.get('', middlewareJwt, async (request, response) => {

    try {
        const result = await CompanyService.list(request);
        response.send(result);
    } catch (error) {
        response.status(500).send(error.message);
    }

});


/** 
 * @summary List galery of photos from Company
 * @author Thiago Godoy
 * @method GET 
 */
router.get('/galery', middlewareJwt, async (request, response) => {

    try {
        const result = await CompanyService.listGalery(request);
        response.send(result);
    } catch (error) {
        response.status(500).send(error.message);
    }

});

/** 
 * @summary Save a photo that is associate a company
 * @author Thiago Godoy
 * @method POST
 * */
router.post('/galery', [middlewareJwt, middlewareGaleryMulter.single('image')], async (request, response) => {


        try {

                if (request.file) {
                        const result = await CompanyService.saveGalery(request, request.file.filename);
                        response.send(result);
                } else {
                        response.status(500).send('Erro ao realizar o upload da imagem');
                }


        } catch (error) {
                response.status(500).send(error.message);
        }


});

/**
 * @summary Delete a photo from galery
 * @author Thiago Godoy
 * @param id
 * @method DELETE  
 */
router.delete('/galery/:id', [middlewareJwt], async (request, response) => {
        try {
                await CompanyService.deleteFromGalery(request);
                response.send();
        } catch (error) {
                response.status(500).send(error.message);
        }

});



/** 
 * @summary Update a company
 * @author Thiago Godoy
 * @method PUT 
 */
router.put('', middlewareJwt, (request, response) => {});

/** 
 * @summary Save a company
 * @author Thiago Godoy
 * @method DELETE
 */
router.delete('', middlewareJwt, async (request, response) => {


});

module.exports = router;