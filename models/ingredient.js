const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const units = require("../utils/Units");

class Ingredient extends Model {}

Ingredient.init(
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
          unique: true,
        },
        defaultUOM: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isIn: [units.GetAllIngredientUOMs().map(x => x.abbr)]
          }
        }
      },
      {
        sequelize,
      }
);

module.exports = Ingredient;