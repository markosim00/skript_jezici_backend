'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Klub extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Klub_Takmicenje}) {
      // define association here
      this.hasMany(Klub_Takmicenje, {foreignKey: 'klubId', as: 'klubTakmicenje', onDelete: 'cascade', hooks: true});
    }
  };
  Klub.init({
    naziv: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dvorana: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Klub',
  });
  return Klub;
};