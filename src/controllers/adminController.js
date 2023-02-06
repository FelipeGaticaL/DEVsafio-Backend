const httpStatus = require('http-status');
const adminService = require('../services/adminService')

const getAllWorkProfiles = async ( req, res, next ) => {
    try {
        const data = await adminService.getAllWorkProfiles()
        res.status(httpStatus.OK).send( data )
    } catch ( error ) {
        next( error );
    }
}

const getAllContactCompanies = async ( req, res, next ) => {
    try {
        const data = await adminService.getAllContactCompanies()
        res.status(httpStatus.OK).send( data )
    } catch ( error ) {
        next( error );
    }
}

module.exports = { getAllWorkProfiles, getAllContactCompanies }