const httpStatus = require('http-status');
const exportExcelService = require('../services/exportExcelService');

const getExcelWorkProfiles = async ( req, res, next ) => {
  try {
    const data = await exportExcelService.getExcelWorkProfiles();
    res.status(httpStatus.OK).send( data );
  } catch ( error ) {
    next( error );
  }
};

const getExcelContactCompanies = async ( req, res, next ) => {
  try {
    const data = await exportExcelService.getExcelContactCompanies();
    res.status(httpStatus.OK).send( data );
  } catch ( error ) {
    next( error );
  }
};

module.exports = {
  getExcelWorkProfiles, getExcelContactCompanies
};
