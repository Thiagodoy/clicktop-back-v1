const express = require('express');
const {sequelize} = require('../data');
//const Category = require('../models/category');


const Category = sequelize.import('../models/category');


var router = express.Router();


/** 
 * @summary List categories
 * @author Thiago Godoy
 * @method GET 
 */
router.get('', async(request, response) => {    

    const entities = await Category.findAll();
    response.send(entities);

});



/** 
 * @summary List companys
 * @author Thiago Godoy
 * @method GET 
 */
router.get('/groups', (request, response) => {

    Category.aggregate('group_name', 'DISTINCT', { plain: false })
    .then((entities)=>{
        entities = entities.map(e=>{
            return {group_name:e.DISTINCT}
        });
        response.send(entities);
    });

   
});

module.exports = router;