const httpStatus = require('http-status');
const contactCompanyService = require('../services/contactCompanyService');

const createContactCompany = async ( req, res, next ) => {
    try {
       const contactCompany = req.body
        await contactCompanyService.createContactCompany( contactCompany )
        res.status(httpStatus.OK).send({
            message: `Empresa registrada con éxito`
        })
    } catch ( err ) {
        next( err );
    }
};

module.exports = { createContactCompany };
