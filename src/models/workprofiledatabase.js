'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkProfileDatabase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkProfileDatabase.init({
    databaseId: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    workProfileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkProfileDatabase',
    timestamps: false
  });
  return WorkProfileDatabase;
};