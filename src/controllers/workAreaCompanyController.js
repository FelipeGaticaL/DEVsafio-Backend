const httpStatus = require('http-status');
const workAreaCompanyService = require('../services/workAreaCompanyService');

const getAllWorkAreaCompany = async ( req, res, next ) => {
  try {
    const data = await workAreaCompanyService.getAllWorkAreaCompany();
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

module.exports = {
    getAllWorkAreaCompany
};
