const { DataBase, sequelize} = require('../models');
const ApiError = require('../helpers/apiError')
const httpStatus = require('http-status');

const getAllDatabases = async () => {
  const allDatabases = await DataBase.findAll( { order: [ ["id", "ASC"] ] } );
  return allDatabases;
};

const postCreateDatabase = async ( database ) => {
  const findDatabase = await DataBase.findOne( { where: { name: database }, raw: true } );
  if( findDatabase !== null ){
    throw new ApiError( 'Ya existe esa base de datos o framework', httpStatus.UNPROCESSABLE_ENTITY )
  }
  let t1 = await sequelize.transaction()
  try {
    const MaxIdCol = await DataBase.findAll({
      attributes: [sequelize.fn('max', sequelize.col('id'))],
      raw: true,
  })
    const MaxId = MaxIdCol[0].max+1
    
    const data = await DataBase.create( { id: MaxId, name: database }, { returning: true, transaction: t1 } )
    await t1.commit()
    return data
  } catch ( error ) {
    await t1.rollback();
    throw new ApiError( 'Error al crear nueva base de datos o framework', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const putUpdateDatabase = async ( database ) => {

  const idDatabase = await DataBase.findOne( { where: { id: database.id }, raw: true } );
  if( idDatabase === null ){
    throw new ApiError( 'No existe la id de la base de datos', httpStatus.UNPROCESSABLE_ENTITY )
  }
  let t1 = await sequelize.transaction()
  try {
     await DataBase.update( { name: database.name}, { where: { id: database.id }, transaction: t1  } )
    await t1.commit()
    return { message: "Se ha actualizado una base de datos o framework correctamente" }
  } catch ( error ) {
    await t1.rollback();
    throw new ApiError( 'Error al actualizar base de datos o framework', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const deleteDestroyDatabase = async ( database ) => {
  const idDatabase = await DataBase.findOne( { where: { id: database.id }, raw: true } );
  if( idDatabase === null ){
    throw new ApiError( 'No existe la id de la base de datos', httpStatus.UNPROCESSABLE_ENTITY )
  }
  let t1 = await sequelize.transaction()
  try {
    await DataBase.destroy( {where: { id: database.id }, transaction: t1  } )
    await t1.commit()
    return { message: "Se ha eliminado una base de datos o framework correctamente" }
  } catch ( error ) {
    await t1.rollback();
    throw new ApiError( 'Error al actualizar la base de datos o framework', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

module.exports = {
  getAllDatabases, postCreateDatabase, putUpdateDatabase, deleteDestroyDatabase
};