'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkProfileTools extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkProfileTools.init({
    toolsId: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    workProfileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkProfileTool',
    timestamps: false
  });
  return WorkProfileTools;
};