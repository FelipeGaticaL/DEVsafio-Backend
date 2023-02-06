'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tools extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tools.belongsToMany( models.WorkProfiles, { through: models.WorkProfileTool, foreignKey: "toolsId" } )
      Tools.belongsToMany( models.Test, { through: models.TestDevlangauge, foreignKey: "devLanguageId" } )
    }
  }
  Tools.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Tools',
      timestamps: false
    }
  );
  return Tools;
};
