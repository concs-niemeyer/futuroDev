'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('funcionarios', {
      id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nome: {
       allowNull: false,
       type: Sequelize.STRING
     },
     celular: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    },
     data_nascimento: {
       allowNull: false,
       type: Sequelize.DATE
     },
     setor: {
        allowNull: false,
        type: Sequelize.STRING
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

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('funcionarios');
  }
};
