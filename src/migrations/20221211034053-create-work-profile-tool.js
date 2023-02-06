'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkProfileTools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      toolsId: {
        type: Sequelize.INTEGER,
        references: { model: 'Tools', key: 'id'}
      },
      level: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      workProfileId: {
        type: Sequelize.INTEGER,
        references: { model: 'WorkProfiles', key: 'id'}
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WorkProfileTools');
  }
};