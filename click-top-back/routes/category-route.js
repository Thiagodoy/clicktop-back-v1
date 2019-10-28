const express = require('express');
const {sequelize} = require('../data');
const CategoryService = require('../services/category-service');


const Category = sequelize.import('../models/category');


var router = express.Router();


/** 
 * @summary List categories
 * @author Thiago Godoy
 * @method GET 
 */
router.get('', async(request, response) => {    

    try {
        const result = await CategoryService.list(request);
        response.send(result);
    } catch (error) {
        response.status(500).send(error.message);
    }

});


/** 
 * @summary List companys
 * @author Thiago Godoy
 * @method GET 
 */
router.get('/groups', async (request, response) => {

    try {
        const result = await CategoryService.group();
        response.send(result);
    } catch (error) {
        response.status(500).send(error.message);
    }
   
});

module.exports = router;