
const express = require('express');
const router = express.Router();
const package = require('../package.json');



/** 
 * @summary List all cities
 * @author Thiago Godoy
 * @method GET 
 */
router.get('', async(request, response) => {    

   response.send(package.version);


});



module.exports = router;