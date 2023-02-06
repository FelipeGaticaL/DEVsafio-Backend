'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'WorkAreas',
      [
        {
          name: 'Desarrollador Frontend',
        },
        {
          name: 'Desarrollador Full Stack / Backend',
        },
        {
          name: 'Diseñador UX/UI',
        },
        {
          name: 'Analista QA',
        },
        {
          name: 'Desarrollador Mobile',
        },
        {
          name: 'Datos',
        },
        {
          name: 'Otra',
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('WorkAreas', null, {});
  }
};
