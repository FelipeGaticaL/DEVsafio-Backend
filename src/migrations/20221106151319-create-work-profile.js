'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING
      },
      employmentStatusCurrent: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stack: {
        allowNull: false,
        type: Sequelize.STRING
      },
      educationalLevel: {
        allowNull: false,
        type: Sequelize.STRING
      },
      educationStatusCurrent: {
        allowNull: false,
        type: Sequelize.STRING
      },
      englishLevel: {
        allowNull: false,
        type: Sequelize.STRING
      },
      additionalToolsComment: {
        type: Sequelize.STRING
      },
      cvUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      linkedinUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      githubUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      portfolioUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      featuredProject: {
        allowNull: false,
        type: Sequelize.STRING
      },
      devExperience: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idealWorkComment: {
        allowNull: false,
        type: Sequelize.STRING
      },
      workAvailability: {
        allowNull: false,
        type: Sequelize.STRING
      },
      availabilityStatus: {
        type: Sequelize.STRING,
        defaultValue: 'Disponibilidad inmediata'
      },
      currentSalary: {
        type: Sequelize.STRING,
        defaultValue: 'Salario actual de 1.000.000 USD'
      },
      relocationOption: {
        type: Sequelize.STRING
      },
      visa: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WorkProfiles');
  }
};