'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Klub_Takmicenje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Klub, Takmicenje}) {
      // define association here
      this.belongsTo(Klub, {foreignKey: 'klubId', as: 'klub'});
      this.belongsTo(Takmicenje, {foreignKey: 'takmicenjeId', as: 'takmicenje'});
    }
  };
  Klub_Takmicenje.init({
    brPobeda: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    brPoraza: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Klub_Takmicenje',
  });
  return Klub_Takmicenje;
};