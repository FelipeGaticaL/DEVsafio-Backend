'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EducationExperiences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EducationExperiences.belongsTo( models.WorkProfiles, { foreignKey: "workProfileId" } )
    }
  }
  EducationExperiences.init(
    {
      name: DataTypes.STRING,
      instituteName: DataTypes.STRING,
      type: DataTypes.STRING, //codigo de tipo
      workProfileId: DataTypes.INTEGER,
      startMonth: DataTypes.STRING,
      endMonth: DataTypes.STRING,
      startYear: DataTypes.INTEGER,
      endYear: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'EducationExperience',
      timestamps: false
    }
  );
  return EducationExperiences;
};
