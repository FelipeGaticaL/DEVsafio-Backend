const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Test.belongsToMany( models.SoftSkills, { through: models.TestSoftSkill, foreignKey: "testId" } )
      Test.belongsToMany( models.Tools, { through: models.TestTool, foreignKey: "testId" } )
      Test.belongsToMany( models.DataBase, { through: models.TestDatabase, foreignKey: "testId" } )
      Test.belongsToMany( models.DevLanguages, { through: models.TestDevlangauge, foreignKey: "testId" } )
      Test.hasMany(models.TestTool, {
        as: 'testId',
        foreignKey: 'testId'
      });
    }
  }
  Test.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    tag: DataTypes.STRING,
    link: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    modelName: 'Test',
    sequelize,
    timestamps: false
  });
  return Test;
};