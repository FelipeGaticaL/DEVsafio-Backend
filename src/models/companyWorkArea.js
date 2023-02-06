'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyWorkArea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CompanyWorkArea.belongsTo(models.ContactCompany, {
        foreignKey: 'companyId'
      });
      CompanyWorkArea.belongsTo(models.WorkArea, {
        foreignKey: 'workAreaId'
      });
    }
  }
  CompanyWorkArea.init(
    {
      companyId: DataTypes.INTEGER,
      workAreaId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'CompanyWorkArea',
      timestamps: false
    }
  );
  return CompanyWorkArea;
};
