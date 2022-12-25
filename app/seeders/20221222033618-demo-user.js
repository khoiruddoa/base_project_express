'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Users', [
      {
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Jack',
      lastName: 'sparow',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Jack',
      lastName: 'sparow',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  
  
  
  
  ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
