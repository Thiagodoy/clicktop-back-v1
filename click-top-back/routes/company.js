const express = require('express');
const {middlewareJwt} = require('../middleware/middleware')
const Company = require('../models/company');
const companyValidation = require('../validation/company-validation');

var router = express.Router();

/** 
 * @summary Save a company
 * @author Thiago Godoy
 * @method POST
 */
router.post('', middlewareJwt, async (request, response) => {


    const {
        error
    } = companyValidation(request.body);
    if (error) return response.status(400).send(error.details[0].message);

    const company = new Company({
        ...request.body
    });

    company.save();

    response.send(company._id);
});

/** 
 * @summary List companys
 * @author Thiago Godoy
 * @method GET 
 */
router.get('', middlewareJwt, (request, response) => {



    // if(request.query.firstName)
    // if(request.query.lastName)
    // if(request.query.lastName)
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