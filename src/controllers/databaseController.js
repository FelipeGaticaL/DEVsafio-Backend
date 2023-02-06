const httpStatus = require('http-status');
const databasesService = require('../services/databaseService');


const getAllDatabases = async ( req, res, next ) => {
  try {
    const data = await databasesService.getAllDatabases();
    res.status(httpStatus.OK).send( data );
  } catch ( error ) {
    next( error );
  }
};

const postCreateDatabase = async ( req, res, next ) => {
  const database = req.body.database

  try {
    const data = await databasesService.postCreateDatabase( database );
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

const putUpdateDatabase = async ( req, res, next ) => {
  const database = req.body
  try {
    const data = await databasesService.putUpdateDatabase( database );
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

const deleteDestroyDatabase = async ( req, res, next ) => {
  const database = req.body
  try {
    const data = await databasesService.deleteDestroyDatabase( database );
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

module.exports = {
  getAllDatabases, postCreateDatabase, putUpdateDatabase, deleteDestroyDatabase
};