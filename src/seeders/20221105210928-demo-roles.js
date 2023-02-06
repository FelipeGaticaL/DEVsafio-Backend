'use strict';

const { ROLES } = require('../config/config.js');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [
      {
        id: ROLES.USER,
        name: 'Usuario'
      },
      {
        id:ROLES.ADMIN,
        name: 'Administrador'
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Roles', null, {});
    };
  }
};
