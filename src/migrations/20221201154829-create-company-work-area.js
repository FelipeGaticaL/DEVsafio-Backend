'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CompanyWorkAreas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'ContactCompanies', key: 'id' },
        onDelete: 'no action',
        onUpdate: 'no action',
      },
      workAreaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'WorkAreas', key: 'id' },
        onDelete: 'no action',
        onUpdate: 'no action',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CompanyWorkAreas');
  }
};