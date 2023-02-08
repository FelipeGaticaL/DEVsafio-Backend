const httpStatus = require('http-status');
const softSkill = require('../models/softSkill');
const SoftSkillService = require('../services/softSkillService');

const getAllSoftSkills = async ( req, res, next ) => {
  try {
    const data = await SoftSkillService.getAllSoftSkills();
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

const postCreateSoftSkills = async ( req,res,next ) => {
  const softSkill = req.body.name
  try {
    const data = await SoftSkillService.postCreateSoftSkills( softSkill )
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
}

const putUpdateSoftSkill = async ( req, res, next ) => {
  const softSkill = req.body
  try {
    const data = await SoftSkillService.putUpdateSoftSkill( softSkill );
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

const deleteDestroySoftSkill = async ( req, res, next ) => {
    const softSkill = req.query
  try {
    const data = await SoftSkillService.deleteDestroySoftSkill( softSkill );
    res.status(httpStatus.OK).send( data );
  } catch ( err ) {
    next( err );
  }
};

module.exports = {
  getAllSoftSkills,
  postCreateSoftSkills,
  putUpdateSoftSkill,
  deleteDestroySoftSkill
};