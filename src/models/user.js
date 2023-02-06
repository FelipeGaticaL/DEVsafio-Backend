'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany( models.WorkProfiles, {
        foreignKey: 'userId'
      })
      User.belongsTo( models.Rol, {
        foreignKey: 'roleId'
      } );
      User.belongsTo( models.UserStatus, {
        foreignKey: 'statusId'
      } );
      User.hasMany(models.TestUser, {
        as: 'usersId',
        foreignKey: 'usersId'
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
      statusId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
