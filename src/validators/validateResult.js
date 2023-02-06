const httpStatus = require('http-status');
const { validationResult } = require('express-validator');

const validateResult = ( req, res, next ) => {
  try {
    validationResult( req ).throw();
    // All validations passed!
    return next();
  } catch ( error ) {
    const errors = error.array().map( e => e.msg );
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send( { errors: httpStatus['500'], message: errors } );
  }
}

module.exports = validateResult
