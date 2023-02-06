'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

     return await queryInterface.bulkInsert(
      'EducationExperiences',
      [
        {
          id:7,
          name: 'Alexis Prueba',
          instituteName: 'Arsenal FC',
          type: 'Club de Futbol',
          workProfileId: 7,
          startMonth: 'Enero',
          endMonth: 'Diciembre',
          startYear: 2014,
          endYear: 2018
        },
        {
          id:8,
          name: 'Cristiano Prueba',
          instituteName: 'Real Madrid',
          type: 'Club de Futbol',
          workProfileId: 8,
          startMonth: 'Enero',
          endMonth: 'Julio',
          startYear: 2009,
          endYear: 2018
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('EducationExperiences', null, {});
  }
};
