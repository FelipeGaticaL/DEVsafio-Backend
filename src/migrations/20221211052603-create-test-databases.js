'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TestDatabases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      testId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Tests', key: 'id' },
        onDelete: 'no action',
        onUpdate: 'no action',
      },
      databaseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'DataBases', key: 'id' },
        onDelete: 'no action',
        onUpdate: 'no action',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TestDatabases');
  }
};