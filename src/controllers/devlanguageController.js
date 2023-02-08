const httpStatus = require('http-status');
const devlanguagesService = require('../services/devlanguageService');

const getAllDevLanguages = async ( req, res, next ) => {
  try {
    const data = await devlanguagesService.getAllDevLanguages();
    res.status(httpStatus.OK).send( data );
  } catch ( error ) {
    next( error );
  }
};

const postCreateDevlenguage = async ( req, res, next ) => {
  const devlenguage = req.body.name
  try {
    const data = await devlanguagesService.postCreateDevlenguage( devlenguage );
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

const putUpdateDevlenguage = async ( req, res, next ) => {
  const devlenguage = req.body
  try {
    const data = await devlanguagesService.putUpdateDevlenguage( devlenguage );
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

const deleteDestroyDevlenguage = async ( req, res, next ) => {
  const devlenguage = req.query
  try {
    const data = await devlanguagesService.deleteDestroyDevlenguage( devlenguage );
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

module.exports = {
  getAllDevLanguages, postCreateDevlenguage, putUpdateDevlenguage, deleteDestroyDevlenguage
};