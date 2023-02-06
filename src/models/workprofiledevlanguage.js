'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkProfileDevLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkProfileDevLanguage.init({
    devLanguageId: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    workProfileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkProfileDevLanguage',
    timestamps: false
  });
  return WorkProfileDevLanguage;
};