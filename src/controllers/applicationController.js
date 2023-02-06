const httpStatus = require('http-status');
const applicationService = require('../services/applicationService')

const getApplicant = async ( req, res, next ) => {
    try {
        const data = await applicationService.getApplicant( req.user.id )
        res.status(httpStatus.OK).send( data )
    } catch ( error ) {
        next( error );
    }
}

module.exports = { getApplicant }