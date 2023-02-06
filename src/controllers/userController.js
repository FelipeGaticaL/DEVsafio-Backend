const httpStatus = require('http-status');
const userService = require('../services/userServices');

const getAllUsers = async ( req, res, next)  => {
  try {
    const data = await userService.getAllUsers();
    res.status(httpStatus.OK).send( data )
  } catch ( error ) {
    next( error );
  }
};

const getUserByEmail = async ( req, res, next ) => {
  try {
    const { email } = req.params;
    const data = await userService.getUserByEmail( email );
    res.status(httpStatus.OK).send( data )
  } catch ( error ) {
    next( error );
  }
};

const createUserWorkProfile = async( req, res, next ) => {
  try {
    const userDataWorkProfile = req.body
    const token = req.user
    if( token ){
      userDataWorkProfile[0]["userId"] = req.user.id
      await userService.createUserWorkProfile( userDataWorkProfile )
      res.status(httpStatus.OK).send( { message: "Datos guardados correctamente"} );
    }else{
      const data = await userService.createUserWorkProfile( userDataWorkProfile )
      res.status(httpStatus.OK).send( data )
    }
  } catch ( error ) {
    next( error );
  }
}

const editPersonalData = async ( req, res, next ) => {
  try {
    let dataUser = req.body
    dataUser['id'] = req.user.id
    const data = await userService.editPersonalData( dataUser )
    res.status(httpStatus.OK).send( data )
  } catch ( error ) {
    next( error )
  }
}

const editWorkExperience = async ( req, res, next ) => {
  try {
    let dataUser = req.body
    dataUser['id'] = req.user.id
    const data = await userService.editWorkExperience( dataUser )
    res.status(httpStatus.OK).send( data )
  } catch ( error ) {
    next( error )
  }
}

const editWorkAvailability = async ( req, res, next ) => {
  try {
    let dataUser = req.body
    dataUser['id'] = req.user.id
    const data = await userService.editWorkAvailability( dataUser )
    res.status(httpStatus.OK).send( data )
  } catch ( error ) {
    next( error )
  }
}

const editStackSalary = async ( req, res, next ) => {
  try {
    let dataUser = req.body
    dataUser['id'] = req.user.id
    const data = await userService.editStackSalary( dataUser )
    res.status(httpStatus.OK).send( data )
  } catch ( error ) {
    next( error )
  }
}

const getSkills = async ( req, res, next ) => {
  try {
    let dataUser = req.user.id
    const data = await userService.getSkills( dataUser )
    res.status(httpStatus.OK).send( data )
  } catch (error) {
    next( error )
  }
}

const editDevlanguages = async ( req, res, next ) => {
  try {
    let dataUser = req.body
    const data = await userService.editDevlanguages( dataUser, req.user.id )
    res.status(httpStatus.OK).send( data )
  } catch ( error ) {
    next( error )
  }
}

const editDatabases = async ( req, res, next ) => {
  try {
    let dataUser = req.body
    const data = await userService.editDatabases( dataUser, req.user.id )
    res.status(httpStatus.OK).send( data )
  } catch ( error ) {
    next( error )
  }
}

const editTools = async ( req, res, next ) => {
  try {
    let dataUser = req.body
    const data = await userService.editTools( dataUser, req.user.id )
    res.status(httpStatus.OK).send( data )
  } catch ( error ) {
    next( error )
  }
}

const createEducation = async ( req, res, next ) => {
  try {
    let dataUser = req.body
    dataUser['id'] = req.user.id
    const data = await userService.createEducation( dataUser )
    res.status(httpStatus.OK).send( data )
  } catch ( error ) {
    next( error )
  }
}

const editEducation = async ( req, res, next ) => {
  try {
    let dataUser = req.body
    const data = await userService.editEducation( dataUser )
    res.status(httpStatus.OK).send( data )
  } catch ( error ) {
    next( error )
  }
}

const deleteEducation = async ( req, res, next ) => {
  try {
    const { id } = req.params
    const data = await userService.deleteEducation( id )
    res.status(httpStatus.OK).send( data )
  } catch ( error ) {
    next( error )
  }
}

const cvUrl = async ( req, res, next ) => {
  try {
    let dataUser = req.body
    dataUser['id'] = req.user.id
    const data = await userService.cvUrl( dataUser )
    res.status(httpStatus.OK).send( data )
  } catch ( error ) {
    next( error )
  }
}

module.exports = {
  getAllUsers,
  getUserByEmail,
  createUserWorkProfile,
  editPersonalData,
  editWorkExperience,
  editWorkAvailability,
  editStackSalary,
  createEducation,
  editEducation,
  deleteEducation,
  getSkills,
  editDevlanguages,
  editDatabases,
  editTools,
  cvUrl
};
