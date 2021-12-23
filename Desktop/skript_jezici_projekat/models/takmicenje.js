'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Takmicenje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Utakmica, Klub_Takmicenje}) {
      // define association here
      this.hasMany(Utakmica, {foreignKey: 'takmicenjeId', as: 'utakmica', onDelete: 'cascade', hooks: true});
      this.hasMany(Klub_Takmicenje, {foreignKey: 'takmicenjeId', as: 'klubTakmicenje', onDelete: 'cascade', hooks: true});
    }
  };
  Takmicenje.init({
    naziv: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Takmicenje',
  });
  return Takmicenje;
};