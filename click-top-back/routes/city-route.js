const express = require('express');
const router = express.Router();
const CityService = require('../services/city-service');


/** 
 * @summary List all cities
 * @author Thiago Godoy
 * @method GET 
 */
router.get('', async(request, response) => {    

    try {
        const result = await CityService.list(request);
        response.send(result);
    } catch (error) {
        response.status(500).send(error.message)
    }

});



module.exports = router;