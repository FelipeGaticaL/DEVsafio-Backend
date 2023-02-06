'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactCompany extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ContactCompany.hasMany(models.CompanyWorkArea, {
        as: 'companyId',
        foreignKey: 'companyId'
      });
    }
  }
  ContactCompany.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    companyName: DataTypes.STRING,
    doubts: DataTypes.STRING
  }, {
    modelName: 'ContactCompany',
    sequelize,
    
  });
  return ContactCompany;
};






