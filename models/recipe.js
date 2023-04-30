const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "User",
        key: "id"
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sourceURL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activeTime: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    activeTimeUOM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totalTime: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    totalTimeUOM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complexity: {
      type: DataTypes.STRING,
      allowNull: false
    }  
  },
  {
    sequelize
  }
);

module.exports = Recipe;