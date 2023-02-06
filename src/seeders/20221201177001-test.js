'use strict';

/* Nota: Las imagenes son iconos de la libreria https://react-icons.github.io/ */
/* ESTE MODULO DEBE SER ADAPTADO EN UN FUTURO PARA QUE SEA UNA REGLA DEL NEGOCIO DE USUARIO
"NO ESTA NORMALIZADA"
*/
module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.bulkInsert(
      'Tests',
      [
        {
          name: 'JavaScript',
          image: 'Javascript-icon.svg',
          description: 'Prueba básica de javascript',
          duration: 80,
          tag: 'Javascript',
          link: 'https://evalart.com/es/questionnaires/programacion/prueba-basica-javascript-3',
          status: 'active'
        },
        {
          name: 'Angular.js',
          image: 'Angular-icon.svg',
          description: 'Prueba téorica de Angular básica',
          duration: 60,
          tag: 'Angular',
          link: 'https://evalart.com/es/questionnaires/programacion/prueba-angular-teorica-2-3',
          status: 'fail'
        },
        {
          name: 'React.js',
          image: 'React-icon.svg',
          description: 'Conocimientos básicos de React',
          duration: 40,
          tag: 'React',
          link: 'https://evalart.com/es/questionnaires/programacion/prueba-reactjs-teorica/',
          status: 'done'
        },
        {
          name: 'Python',
          image: 'Python-icon.svg',
          description: 'Prueba práctica de Python',
          duration: 90,
          tag: 'Python',
          link: 'https://evalart.com/es/questionnaires/programacion/prueba-practica-de-python/',
          status: 'active'
        },
        {
          name: 'Java',
          image: 'Java-icon.svg',
          description: 'Prueba Teórica y Práctica Java',
          duration: 120,
          tag: 'Java',
          link: 'https://evalart.com/es/questionnaires/programacion/prueba-teorica-y-practica-de-java-2/',
          status: 'active'
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Tests', null, {});
  }
};
