const httpStatus = require('http-status');
const testsService = require('../services/testService')

const getAllTests = async ( req, res, next ) => {
    try {
        const data = await testsService.getAllTests();
        res.status(httpStatus.OK).send( data );
      } catch (error) {
        next( error );
      }
}

const postCreateTest = async ( req, res, next ) => {
    const test = req.body.test
    try {
      const data = await testsService.postCreateTest( test );
      res.status(httpStatus.OK).send( data );
    } catch ( err ) {
      next( err );
    }
}

const putUpdateTest = async ( req, res, next ) => {
    const test = req.body
    try {
      const data = await testsService.putUpdateTest( test );
      res.status(httpStatus.OK).send( data );
    } catch ( err ) {
      next( err );
    }
}

const deleteDestroyTest = async ( req, res, next ) => {
    const test = req.body
    try {
      const data = await testsService.deleteDestroyTest( test );
      res.status(httpStatus.OK).send( data );
    } catch ( err ) {
      next( err );
    }
}

module.exports = { getAllTests,postCreateTest,putUpdateTest,deleteDestroyTest }