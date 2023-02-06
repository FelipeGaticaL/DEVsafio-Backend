const { Tools, sequelize } = require('../models');
const ApiError = require('../helpers/apiError')
const httpStatus = require('http-status');

const getAllTools = async () => {
  const allTools = await Tools.findAll( { order: [ ["id", "ASC"] ] } );
  return allTools;
};

const postCreateTool = async ( tool ) => {
  const findtool = await Tools.findOne( { where: { name: tool }, raw: true } );
  if( findtool !== null ){
    throw new ApiError( "Ya existe esa herramienta", httpStatus.UNPROCESSABLE_ENTITY )
  }
  let t1 = await sequelize.transaction()
  try {
    await Tools.create( { name: tool }, { returning: true, transaction: t1 } )
    await t1.commit()
    return { message: "Se ha generado una nueva herramienta" }
  } catch ( error ) {
    await t1.rollback();
    throw new ApiError( 'Error al crear nueva herramienta', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const putUpdateTool = async ( dataTool ) => {
  const idTool = await Tools.findOne( { where: { id: dataTool.id }, raw: true } );
  if( idTool === null ){
    throw new ApiError( "No existe la id de la herramienta", httpStatus.UNPROCESSABLE_ENTITY )
  }
  let t1 = await sequelize.transaction()
  try {
    await Tools.update( { name: dataTool.tool}, { where: { id: dataTool.id }, transaction: t1 } )
    await t1.commit()
    return { message: "Se ha actualizado una herramienta correctamente" }
  } catch ( error ) {
    await t1.rollback();
    throw new ApiError( 'Error al actualizar la herramienta', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const deleteDestroyTool = async ( dataTool ) => {
  const idTool = await Tools.findOne({ where: { id: dataTool.id }, raw: true });
  if(idTool === null){
    throw new ApiError( "No existe la id de la herramienta", httpStatus.UNPROCESSABLE_ENTITY )
  }
  let t1 = await sequelize.transaction()
  try {
    await Tools.destroy( { where: { id: dataTool.id }, transaction: t1  } )
    await t1.commit()
    return { message: "Se ha eliminado una herramienta correctamente" }
  } catch ( error ) {
    await t1.rollback();
    throw new ApiError( 'Error al actualizar la herramienta', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

module.exports = {
  getAllTools, postCreateTool, putUpdateTool, deleteDestroyTool
};