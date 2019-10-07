const express = require('express');
const verifyToken = require('../middleware/middleware')

var router = express.Router();

/** 
 * @summary Authentication on System
 * @author Thiago Godoy
 * @method POST
 */
router.post('',verifyToken, async (request, response) => {    
    response.send(res);
});

/** 
 * @summary List companys
 * @author Thiago Godoy
 * @method GET 
 */
router.get('',verifyToken, (request, response) => {

    // if(request.query.firstName)
    // if(request.query.lastName)
    // if(request.query.lastName)
});

/** 
 * @summary Update a company
 * @author Thiago Godoy
 * @method PUT 
 */
router.put('',verifyToken, (request, response) => {});

/** 
 * @summary Save a company
 * @author Thiago Godoy
 * @method POST
 */
router.post('',verifyToken, async (request, response) => {
   

});

module.exports = router;