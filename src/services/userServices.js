const { User, WorkProfiles, EducationExperience, WorkProfileDevLanguage, WorkProfileDatabase, WorkProfileTool, WorkProfileSoftSkill, sequelize } = require('../models')
const ApiError = require('../helpers/apiError')
const httpStatus = require('http-status');

const createUser = async ( user ) => {
    let t1 = await sequelize.transaction()
    try {
      const dataUser = await User.create( user, { returning: true, transaction: t1 } )
      await t1.commit()
      return dataUser
    } catch ( error ) {
      await t1.rollback();
      throw new ApiError( 'Error al registrar el usuario', httpStatus.UNPROCESSABLE_ENTITY )
    }
}

const getUserByEmailLogin = async ( email ) => {
    const user = await User.findOne( { where: { email }, raw: true } );
    return user;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] }
  });
  return allUsers;
};

const getUserByEmail = async ( email ) => {
  const user = await User.findOne( { where: { email }, raw: true, attributes: { exclude: ['password'] } } );
    if ( !user ) {
        throw new ApiError( 'No existe el email', httpStatus.NOT_FOUND );
      }
    return user;
};

const createUserWorkProfile = async ( userDataWorkProfile ) => {
  let t1 = await sequelize.transaction()
  
  let query = [], data
  try {
    data = await WorkProfiles.create( userDataWorkProfile[0], { returning: true, transaction: t1 } )
    query.push( data["dataValues"] )
    for (let i = 1; i < userDataWorkProfile.length; i++) {
      for (let j = 0; j < userDataWorkProfile[i].length; j++) {
        userDataWorkProfile[i][j].workProfileId = data["dataValues"]["id"]
      }
    }
    await User.update( { statusId: 2 }, { where: { id: data["dataValues"]["userId"] }, transaction: t1 } )
    data = await EducationExperience.bulkCreate( userDataWorkProfile[1], { returning: true, transaction: t1 } )
    query.push( data[0]["dataValues"] )
    data = await WorkProfileDevLanguage.bulkCreate( userDataWorkProfile[2], { returning: true, transaction: t1 } )
    query.push( data[0]["dataValues"] )
    data = await WorkProfileDatabase.bulkCreate( userDataWorkProfile[3], { returning: true, transaction: t1 } )
    query.push( data[0]["dataValues"] )
    data = await WorkProfileTool.bulkCreate( userDataWorkProfile[4], { returning: true, transaction: t1 } )
    query.push( data[0]["dataValues"] )
    data = await WorkProfileSoftSkill.bulkCreate( userDataWorkProfile[5], { returning: true, transaction: t1 } )
    query.push( data[0]["dataValues"] )
    await t1.commit()
    return { message: "Sus datos se han guardado correctamente" }
  } catch ( error ) {
    await t1.rollback()
    throw new ApiError( 'Error al registrar los datos', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const editPersonalData = async ( userData ) => {
  let t1 = await sequelize.transaction()
  try {
    await User.update( { firstName: userData.firstName, lastName: userData.lastName, email: userData.email }, { where: { id: userData.id }, transaction: t1 } )
    await WorkProfiles.update( { phoneNumber: userData.phoneNumber, city: userData.city, linkedinUrl: userData.linkedinUrl, githubUrl: userData.githubUrl }, { where: { userId: userData.id }, transaction: t1 } )
    await t1.commit()
    return { message: "Sus datos se han actualizado correctamente" }
  } catch ( error ) {
    await t1.rollback()
    throw new ApiError( "No se pueden actualizar los datos", httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const editWorkExperience = async ( userData ) => {
  let t1 = await sequelize.transaction()
  try {
    await WorkProfiles.update( { englishLevel: userData.englishLevel, devExperience: userData.devExperience }, { where: { userId: userData.id }, transaction: t1 } )
    await t1.commit()
    return { message: "Sus datos se han actualizado correctamente" }
  } catch ( error ) {
    await t1.rollback()
    throw new ApiError( 'No se pueden actualizar los datos', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const editWorkAvailability = async ( userData ) => {
  let t1 = await sequelize.transaction()
  try {
    await WorkProfiles.update( { workAvailability: userData.workAvailability, availabilityStatus: userData.availabilityStatus }, { where: { userId: userData.id }, transaction: t1 } )
    await t1.commit()
    return { message: "Sus datos se han actualizado correctamente" }
  } catch ( error ) {
    await t1.rollback()
    throw new ApiError( 'No se pueden actualizar los datos', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const editStackSalary = async ( userData ) => {
  let t1 = await sequelize.transaction()
  try {
    await WorkProfiles.update( { stack: userData.stack, currentSalary: userData.currentSalary }, { where: { userId: userData.id }, transaction: t1 } )
    await t1.commit()
    return { message: "Sus datos se han actualizado correctamente" }
  } catch ( error ) {
    await t1.rollback()
    throw new ApiError( 'No se pueden actualizar los datos', httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const getSkills = async ( id ) => {
  let dataObject = {}
  let data = await WorkProfiles.findOne( { where: { userId: id } } )
  const workprofileId = data['id']

  data = await sequelize.query(
    `select * from "DevLanguages" as D INNER JOIN "WorkProfileDevLanguages" as W ON D.id = "devLanguageId" WHERE "workProfileId" = ${workprofileId};`
  )
  dataObject["devlanguages"] = data[0]

  data = await sequelize.query(
    `select * from "DataBases" as D INNER JOIN "WorkProfileDatabases" as W ON D.id = "databaseId" WHERE "workProfileId" = ${workprofileId};`
  )
  dataObject["databases"] = data[0]

  data = await sequelize.query(
    `select * from "Tools" as T INNER JOIN "WorkProfileTools" as W ON T.id = "toolsId" WHERE "workProfileId" = ${workprofileId};`
  )
  dataObject["tools"] = data[0]
  return dataObject
}

const editDevlanguages = async ( userData, id ) => {
  let t1 = await sequelize.transaction()
  try {
    let data = await WorkProfiles.findOne( { where: { userId: id }, transaction: t1 } )
    for (let i = 0; i < userData.length; i++) {
      userData[i]["workProfileId"] = data["id"]
    }
    await WorkProfileDevLanguage.destroy( { where: { workProfileId: data["id"] }, transaction: t1 } )
    await WorkProfileDevLanguage.bulkCreate( userData, { returning: true, transaction: t1 } )
    await t1.commit()
    let result = await sequelize.query( `SELECT * FROM "WorkProfileDevLanguages" WHERE "workProfileId" = ${data["id"]};` )
    return result[0]
  } catch ( error ) {
    await t1.rollback()
    throw new ApiError( "No se pueden modificar los lenguajes", httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const editDatabases = async ( userData, id ) => {
  let t1 = await sequelize.transaction()
  try {
    let data = await WorkProfiles.findOne( { where: { userId: id }, transaction: t1 } )
    for (let i = 0; i < userData.length; i++) {
      userData[i]["workProfileId"] = data["id"]
    }
    await WorkProfileDatabase.destroy( { where: { workProfileId: data["id"] }, transaction: t1 } )
    await WorkProfileDatabase.bulkCreate( userData, { returning: true, transaction: t1 } )
    await t1.commit()
    let result = await sequelize.query(`SELECT * FROM "WorkProfileDatabases" WHERE "workProfileId" = ${data["id"]};`)
    return result[0]
  } catch ( error ) {
    await t1.rollback()
    throw new ApiError( "No se pueden modificar las databases", httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const editTools = async ( userData, id ) => {
  let t1 = await sequelize.transaction()
  try {
    let data = await WorkProfiles.findOne( { where: { userId: id }, transaction: t1 } )
    for (let i = 0; i < userData.length; i++) {
      userData[i]["workProfileId"] = data["id"]
    }
    await WorkProfileTool.destroy( { where: { workProfileId: data["id"] }, transaction: t1 } )
    await WorkProfileTool.bulkCreate( userData, { returning: true, transaction: t1 } )
    await t1.commit()
    let result = await sequelize.query( `SELECT * FROM "WorkProfileTools" WHERE "workProfileId" = ${data["id"]};` )
    return result[0]
  } catch ( error ) {
    await t1.rollback()
    throw new ApiError( "No se pueden modificar las herramientas", httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const createEducation = async ( userData ) => {
  let t1 = await sequelize.transaction()
  try {
    const { dataValues } = await WorkProfiles.findOne( { where: { userId: userData.id }, transaction: t1 } )
    userData["workProfileId"] = dataValues["id"]
    delete userData.id
    const data = await EducationExperience.create( userData, { returning: true, transaction: t1 } )
    await t1.commit()
    return data
  } catch ( error ) {
    await t1.rollback()
    throw new ApiError( "No se puede agregar la experiencia educacional", httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const editEducation = async ( userData ) => {
  let t1 = await sequelize.transaction()
  try {
    await EducationExperience.update( { name: userData.name, instituteName: userData.instituteName, startMonth: userData.startMonth, endMonth: userData.endMonth, startYear: userData.startYear, endYear: userData.endYear }, { where: { id: userData.id }, transaction: t1 } )
    await t1.commit()
    return { message: "Sus datos se han actualizado correctamente" }
  } catch ( error ) {
    await t1.rollback()
    console.log("error = ", error);
    throw new ApiError( "No se pueden actualizar los datos", httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const deleteEducation = async ( id ) => {
  let t1 = await sequelize.transaction()
  try {
    await EducationExperience.destroy( { where: { id: id }, transaction: t1 } )
    await t1.commit()
    return { message: "Perfil educacional eliminado correctamente" }
  } catch ( error ) {
    await t1.rollback()
    throw new ApiError( "No se puede eliminar el perfil educacional", httpStatus.UNPROCESSABLE_ENTITY )
  }
}

const cvUrl = async ( userData ) => {
  let t1 = await sequelize.transaction()
  try {
    console.log("CV = ", userData);
    await WorkProfiles.update( { cvUrl: userData.cvUrl }, { where: { userId: userData.id }, transaction: t1 } )
    await t1.commit()
    return { message: "Sus datos se han actualizado correctamente" }
  } catch ( error ) {
    await t1.rollback()
    throw new ApiError( "No se pueden actualizar los datos", httpStatus.UNPROCESSABLE_ENTITY )
  }
}

module.exports = { createUser, getUserByEmailLogin, getAllUsers, getUserByEmail, createUserWorkProfile, cvUrl,
                  editPersonalData, editWorkExperience, editWorkAvailability, editStackSalary, createEducation, editEducation, deleteEducation,
                  getSkills, editDevlanguages, editDatabases, editTools
}