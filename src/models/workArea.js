'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkArea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WorkArea.hasMany(models.CompanyWorkArea, {
        as: 'workAreaId',
        foreignKey: 'workAreaId'
      });
    }
  }
  WorkArea.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WorkArea',
    timestamps: false
  });
  return WorkArea;
};