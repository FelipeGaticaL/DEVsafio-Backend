'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkProfileDevLanguages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      devLanguageId: {
        type: Sequelize.INTEGER,
        references: { model: 'DevLanguages', key: 'id'}
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
    await queryInterface.dropTable('WorkProfileDevLanguages');
  }
};