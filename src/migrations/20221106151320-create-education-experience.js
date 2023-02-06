'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EducationExperiences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      instituteName: {
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      workProfileId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'WorkProfiles', key: 'id' },
      },
      startMonth: {
        type: Sequelize.STRING
      },
      endMonth: {
        type: Sequelize.STRING
      },
      startYear: {
        type: Sequelize.INTEGER
      },
      endYear: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EducationExperiences');
  }
};