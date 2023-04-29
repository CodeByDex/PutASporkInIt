const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserPassword extends Model {}

UserPassword.init(
  {
       id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true
       },
       password: {
        type: DataTypes.STRING,
        allowNull: false,
       },
       userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: "User"},
        key: "id"
       }
  },
  {
    sequelize
  }
);

module.exports = UserPassword;