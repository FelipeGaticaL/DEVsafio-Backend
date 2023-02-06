'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkProfileDatabases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      databaseId: {
        type: Sequelize.INTEGER,
        references: { model: 'DataBases', key: 'id'}
      },
      level: {
        type: Sequelize.INTEGER
      },
      workProfileId: {
        type: Sequelize.INTEGER,
        references: { model: 'WorkProfiles', key: 'id'}
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WorkProfileDatabases');
  }
};