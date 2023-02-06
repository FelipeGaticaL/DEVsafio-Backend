'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkProfiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WorkProfiles.belongsTo( models.User, {foreignKey: "userId"} )
      WorkProfiles.belongsToMany( models.SoftSkills, { through: models.WorkProfileSoftSkill, foreignKey: "workProfileId" } )
      WorkProfiles.belongsToMany( models.Tools, { through: models.WorkProfileTool, foreignKey: "workProfileId" } )
      WorkProfiles.belongsToMany( models.DataBase, { through: models.WorkProfileDatabase, foreignKey: "workProfileId" } )
      WorkProfiles.belongsToMany( models.DevLanguages, { through: models.WorkProfileDevLanguage, foreignKey: "workProfileId" } )
      WorkProfiles.hasMany( models.EducationExperience, { foreignKey: "workProfileId" } )
    }
  }
  WorkProfiles.init({
    phoneNumber: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    gender: DataTypes.STRING,
    employmentStatusCurrent: DataTypes.STRING,
    stack: DataTypes.STRING,
    educationalLevel: DataTypes.STRING,
    educationStatusCurrent: DataTypes.STRING,
    englishLevel: DataTypes.STRING,
    additionalToolsComment: DataTypes.STRING,
    cvUrl: DataTypes.STRING,
    linkedinUrl: DataTypes.STRING,
    githubUrl: DataTypes.STRING,
    portfolioUrl: DataTypes.STRING,
    featuredProject: DataTypes.STRING,
    devExperience: DataTypes.STRING,
    idealWorkComment: DataTypes.STRING,
    workAvailability: DataTypes.STRING,
    availabilityStatus: DataTypes.STRING,
    currentSalary: DataTypes.STRING,
    relocationOption: DataTypes.STRING,
    visa: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkProfiles',
  });
  return WorkProfiles;
};