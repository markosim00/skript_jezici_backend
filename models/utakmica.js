'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Utakmica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Takmicenje}) {
      // define association here
      this.belongsTo(Takmicenje, {foreignKey: 'takmicenjeId', as: 'takmicenje'});
    }
  };
  Utakmica.init({
    domacin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gost: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rezDomacin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rezGost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dvorana: {
      type: DataTypes.STRING,
      allowNull: false
    },
    datum: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vreme: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Utakmica',
  });
  return Utakmica;
};