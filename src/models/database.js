'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DataBases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DataBases.belongsToMany( models.WorkProfiles, { through: models.WorkProfileDatabase, foreignKey: "databaseId" } )
      DataBases.belongsToMany( models.Test, { through: models.TestDatabase, foreignKey: "databaseId" } )
    }
  }
  DataBases.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'DataBase',
      timestamps: false
    }
  );
  return DataBases;
};
