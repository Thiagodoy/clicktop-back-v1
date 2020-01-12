const express = require('express');
const GaleryService = require('../services/galery-service');


const {
    middlewareJwt    
} = require('../middleware/middleware')


var router = express.Router();

/** 
 * @summary Save galerys
 * @author Thiago Godoy
 * @method POST 
 */
router.post('', middlewareJwt, async (request, response) => {

    try {
        const result = await GaleryService.save(request.body);
        response.send(result);
    } catch (error) {
        response.status(500).send(error.message);
    }
   
});


/** 
 * @summary Delete by company
 * @author Thiago Godoy
 * @method DELETE 
 */
router.delete('/:id',middlewareJwt, async (request, response) => {

    try {
        const result = await GaleryService.delete(request.params.id);
        response.send(result);
    } catch (error) {
        response.status(500).send(error.message);
    }
   
});


/** 
 * @summary Delete by company
 * @author Thiago Godoy
 * @method DELETE 
 */
router.delete('/company/:id',middlewareJwt, async (request, response) => {

    try {
        const result = await GaleryService.delete(request.params.id);
        response.send(result);
    } catch (error) {
        response.status(500).send(error.message);
    }
   
});

module.exports = router;