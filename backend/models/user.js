const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
});

module.exports = { User };
