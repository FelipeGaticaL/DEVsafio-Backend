const bcrypt = require("bcryptjs");

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    function hashing(value){
      const passHashed = bcrypt.hashSync(value, 10)
      return passHashed
    }
    

    return await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 7,
          firstName: 'Alexis',
          lastName: 'Sanchez',
          email: 'doglover@gmail.com',
          password: hashing('Masterdog1234'),
          roleId: 1,
          statusId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          firstName: 'Cristiano',
          lastName: 'Santos',
          email: 'eurocopa@gmail.com',
          password: hashing('Siuu1234'),
          roleId: 1,
          statusId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 9,
          firstName: 'Lionel',
          lastName: 'Messi',
          email: 'scaloneta@gmail.com',
          password: hashing('Messirve1234'),
          roleId: 2,
          statusId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
