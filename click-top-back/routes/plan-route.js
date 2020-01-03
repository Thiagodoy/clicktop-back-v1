const express = require('express');
const {sequelize} = require('../data');
const PlanService = require('../services/plan-service');


const Category = sequelize.import('../models/category');


var router = express.Router();


/** 
 * @summary List categories
 * @author Thiago Godoy
 * @method GET 
 */
router.get('', async(request, response) => {    

    try {
        const result = await PlanService.list();
        response.send(result);
    } catch (error) {
        response.status(500).send(error.message);
    }

});

module.exports = router;