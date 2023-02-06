'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TestUser.belongsTo(models.Test, {
        foreignKey: 'testId'
      });
      TestUser.belongsTo(models.User, {
        foreignKey: 'usersId'
      });
    }
  }
  TestUser.init(
    {
      testId: DataTypes.INTEGER,
      usersId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'TestUser'
    }
  );
  return TestUser;
};



