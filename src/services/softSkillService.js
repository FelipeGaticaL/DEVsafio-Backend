const { SoftSkills, sequelize } = require('../models');
const ApiError = require('../helpers/apiError')
const httpStatus = require('http-status');


const getAllSoftSkills = async () => {
  const allSoftSkills = await SoftSkills.findAll( { order: [ ["id", "ASC"] ] } );
  return allSoftSkills;
};

const postCreateSoftSkills = async ( softSkill ) => {

  const findSoftSkill = await SoftSkills.findOne({ where: { name: softSkill }, raw: true });
  if( findSoftSkill !== null ) {
    return { message: 'Ya existe esa softskill' }
  }
  let t1 = await sequelize.transaction()
  try {
    const MaxIdCol = await SoftSkills.findAll({
      attributes: [sequelize.fn('max', sequelize.col('id'))],
      raw: true,
  })
    const MaxId = MaxIdCol[0].max+1
    const data = await SoftSkills.create( { id: MaxId, name: softSkill }, { returning: true, transaction: t1 } )
    await t1.commit()
    return data
  } catch ( error ) {
    await t1.rollback();
    throw new ApiError( 'Error al crear una nueva softskill', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const putUpdateSoftSkill = async ( softSkill ) => {
  const idSoftSkill = await SoftSkills.findOne( { where: { id: softSkill.id }, raw: true } );
  if( idSoftSkill === null ){
    return { message: "No existe la id del soft-Skill" }
  }
  let t1 = await sequelize.transaction()
  try {
    await SoftSkills.update( { name: softSkill.name}, { where: { id: softSkill.id }, transaction: t1  } )
    await t1.commit()
    return { message: "Se ha actualizado el soft-skill correctamente" }
  } catch ( error ) {
    await t1.rollback();
    throw new ApiError( 'Error al actualizar la soft-skill', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const deleteDestroySoftSkill = async ( softSkill ) => {
  const idSoftSkill = await SoftSkills.findOne( { where: { id: softSkill.id }, raw: true } );
  if( idSoftSkill === null ){
    return { message: "No existe la id del soft-skill" }
  }
  let t1 = await sequelize.transaction()
  try {
    await SoftSkills.destroy( { where: { id: softSkill.id }, transaction: t1  } )
    await t1.commit()
    return { message: "Se ha eliminado un soft-skill correctamente" }
  } catch ( error ) {
    await t1.rollback();
    throw new ApiError( 'Error al actualizar el soft-skill', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

module.exports = {
  getAllSoftSkills,
  postCreateSoftSkills,
  putUpdateSoftSkill,
  deleteDestroySoftSkill
};