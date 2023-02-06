'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestTool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  TestTool.init(
    {
      testId: DataTypes.INTEGER,
      toolsId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'TestTool'
    }
  );
  return TestTool;
};




