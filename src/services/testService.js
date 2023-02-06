const {Test, sequelize} = require('../models')
const ApiError = require('../helpers/apiError')
const httpStatus = require('http-status');

const getAllTests = async () => {
    const allTests = await Test.findAll( { order: [ ["id", "ASC"] ] } );
    return allTests;
};

const postCreateTest = async ( test ) => {
    const findTest = await Test.findOne( { where: { name : test }, raw: true } )
    if( findTest !== null ){
        return { message:'Ya existe ese test' }
    }
    let t1 = await sequelize.transaction()
    try {
    await Test.create( { name: test }, { returning: true, transaction: t1 } )
    await t1.commit()
    return { message: "Se ha generado un test correctamente" }
  } catch ( error ) {
    await t1.rollback();
    throw new ApiError( 'Error al crear un nuevo test', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const putUpdateTest = async ( test )=> {
    const idTest = await Test.findOne( { where: { id: test.id }, raw: true } );
    if( idTest === null ){
      return { message: "No existe la id del test" }
    }
    let t1 = await sequelize.transaction()
    try {
      await Test.update( { name: test.test}, { where: { id: test.id }, transaction: t1  } )
      await t1.commit()
      return { message: "Se ha actualizado el test correctamente" }
    } catch ( error ) {
      await t1.rollback();
      throw new ApiError( 'Error al actualizar el test', httpStatus.UNPROCESSABLE_ENTITY )
    }
}

const deleteDestroyTest = async ( test ) => {
    const idTest = await Test.findOne( { where: { id: test.id }, raw: true } );
    if( idTest === null ){
        return { message: "No existe la id del test" }
      }
      let t1 = await sequelize.transaction()
      try {
        await Test.destroy( { where: { id: test.id }, transaction: t1  } )
        await t1.commit()
        return { message: "Se ha eliminado un test correctamente" }
      } catch ( error ) {
        await t1.rollback();
        throw new ApiError( 'Error al actualizar el test', httpStatus.UNPROCESSABLE_ENTITY )
      }
}

module.exports = { getAllTests, postCreateTest, putUpdateTest, deleteDestroyTest }