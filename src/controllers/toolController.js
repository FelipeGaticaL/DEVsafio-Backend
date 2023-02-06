const httpStatus = require('http-status');
const ToolService = require('../services/toolService');

const getAllTools = async ( req, res, next ) => {
  try {
    const data = await ToolService.getAllTools();
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

const postCreateTool = async ( req, res, next ) => {
  const tool = req.body.tool
  try {
    const data = await ToolService.postCreateTool( tool );

    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

const putUpdateTool = async ( req, res, next ) => {
  const dataTool = req.body
  try {
    const data = await ToolService.putUpdateTool(dataTool);
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

const deleteDestroyTool = async ( req, res, next ) => {
  const dataTool = req.body
  try {
    const data = await ToolService.deleteDestroyTool( dataTool );
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

module.exports = {
  getAllTools, postCreateTool, putUpdateTool, deleteDestroyTool
};