const { DevLanguages, sequelize } = require('../models');
const ApiError = require('../helpers/apiError');
const httpStatus = require('http-status');

const getAllDevLanguages = async () => {
  const allDevLanguages = await DevLanguages.findAll({
    order: [['id', 'ASC']]
  });
  return allDevLanguages;
};

const postCreateDevlenguage = async (devlenguage) => {
  const findDevLanguage = await DevLanguages.findOne({
    where: { name: devlenguage },
    raw: true
  });
  if (findDevLanguage !== null) {
    throw new ApiError(
      'Ya existe ese lenguaje',
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
  let t1 = await sequelize.transaction();
  try {
    const MaxIdCol = await DevLanguages.findAll({
      attributes: [sequelize.fn('max', sequelize.col('id'))],
      raw: true
    });
    const MaxId = MaxIdCol[0].max + 1;
    console.log(MaxId)
    const data = await DevLanguages.create(
      { id:MaxId,  name: devlenguage },
      { returning: true, transaction: t1 }
    );
    await t1.commit();
    return data
  } catch (error) {
    await t1.rollback();
    throw new ApiError(
      'Error al crear un nuevo lenguaje',
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
};

const putUpdateDevlenguage = async (devlenguage) => {
  const idDevLanguage = await DevLanguages.findOne({
    where: { id: devlenguage.id },
    raw: true
  });
  if (idDevLanguage === null) {
    throw new ApiError(
      'No existe la id del lenguaje',
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
  let t1 = await sequelize.transaction();
  try {
    await DevLanguages.update(
      { name: devlenguage.name },
      { where: { id: devlenguage.id }, transaction: t1 }
    );
    await t1.commit();
    return { message: 'Se ha actualizado el lenguaje correctamente' };
  } catch (error) {
    await t1.rollback();
    throw new ApiError(
      'Error al actualizar el lenguaje',
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
};

const deleteDestroyDevlenguage = async (devlenguage) => {
  const idDevLanguage = await DevLanguages.findOne({
    where: { id: devlenguage.id },
    raw: true
  });
  if (idDevLanguage === null) {
    throw new ApiError(
      'No existe la id del lenguaje',
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
  let t1 = await sequelize.transaction();
  try {
    await DevLanguages.destroy({
      where: { id: devlenguage.id },
      transaction: t1
    });
    await t1.commit();
    return { message: 'Se ha eliminado un lenguaje correctamente' };
  } catch (error) {
    await t1.rollback();
    throw new ApiError(
      'Error al actualizar el lenguaje',
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
};

module.exports = {
  getAllDevLanguages,
  postCreateDevlenguage,
  putUpdateDevlenguage,
  deleteDestroyDevlenguage
};
