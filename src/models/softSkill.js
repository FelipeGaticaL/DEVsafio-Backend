'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SoftSkills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SoftSkills.belongsToMany( models.WorkProfiles, { through: models.WorkProfileSoftSkill, foreignKey: "softSkillsId" } )
      SoftSkills.belongsToMany( models.Test, { through: models.TestSoftSkill, foreignKey: "softSkillId" } )

    }
  }
  SoftSkills.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'SoftSkills',
      timestamps: false
    }
  );
  return SoftSkills;
};
