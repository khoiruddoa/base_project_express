'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Users', {
        userId: {
          allowNull: false,

          type: Sequelize.INTEGER,
          references: {
            model: 'User',
            key: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'restrict'
        },
        
        roleId: {
          allowNull: false,

          type: Sequelize.INTEGER,
          references: {
            model: 'Role',
            key: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'restrict'
        },
        
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
