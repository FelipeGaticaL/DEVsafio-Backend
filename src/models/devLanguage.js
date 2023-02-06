'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DevLanguages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DevLanguages.belongsToMany( models.WorkProfiles, { through: models.WorkProfileDevLanguage, foreignKey: "devLanguageId" } )
      DevLanguages.belongsToMany( models.Test, { through: models.TestDevlangauge, foreignKey: "devLanguageId" } )
    }
    }
  DevLanguages.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'DevLanguages',
      timestamps: false
    }
  );
  return DevLanguages;

}