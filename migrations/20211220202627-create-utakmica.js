'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Utakmicas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      domacin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gost: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rezDomacin: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      rezGost: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      dvorana: {
        type: Sequelize.STRING,
        allowNull: false
      },
      datum: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vreme: {
        type: Sequelize.STRING,
        allowNull: false
      },
      takmicenjeId: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Utakmicas');
  }
};