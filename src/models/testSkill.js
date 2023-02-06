'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestSoftSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  TestSoftSkill.init(
    {
      testId: DataTypes.INTEGER,
      softSkillId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'TestSoftSkill'
    }
  );
  return TestSoftSkill;
};





