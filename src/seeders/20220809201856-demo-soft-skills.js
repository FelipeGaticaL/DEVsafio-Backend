'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'SoftSkills',
      [
        {
          name: 'Lider'
        },
        {
          name: 'Resilente/Perseverante'
        },
        {
          name: 'Comunicación/Sociable'
        },
        {
          name: 'Colaborativo/Empatía'
        },
        {
          name: 'Aprendizaje ágil/Autónomo'
        },
        {
          name: 'Flexible/Adaptable'
        },
        {
          name: 'Responsable'
        },
        {
          name: 'Innovador/Curioso'
        },
        {
          name: 'Negociación'
        },
        {
          name: 'Resolución de problemas'
        },
        {
          name: 'Productividad/Iniciativa'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('SoftSkills', null, {});
  }
};
