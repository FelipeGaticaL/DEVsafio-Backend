'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkProfileSoftSkills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkProfileSoftSkills.init({
    softSkillsId: DataTypes.INTEGER,
    workProfileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkProfileSoftSkill',
    timestamps: false
  });
  return WorkProfileSoftSkills;
};