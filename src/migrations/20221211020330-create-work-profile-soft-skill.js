'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkProfileSoftSkills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      softSkillsId: {
        type: Sequelize.INTEGER,
        references: { model: 'SoftSkills', key: 'id'}
      },
      workProfileId: {
        type: Sequelize.INTEGER,
        references: { model: 'WorkProfiles', key: 'id'}
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WorkProfileSoftSkills');
  }
};