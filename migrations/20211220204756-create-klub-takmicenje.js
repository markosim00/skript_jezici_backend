'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Klub_Takmicenjes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brPobeda: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      brPoraza: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      klubId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      takmicenjeId: {
        type: Sequelize.INTEGER,
        allowNull: false
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Klub_Takmicenjes');
  }
};