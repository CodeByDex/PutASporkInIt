const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const units = require("../utils/Units");

class UserGroceryList extends Model { }
class GroceryListIngredients extends Model { }

UserGroceryList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },

    recipeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recipe',
        key: 'id'
      }
    }
  },
  {
    sequelize
  }
);

GroceryListIngredients.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    groceryListID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usergrocerylist',
        key: 'id'
      },
    },
    ingredientID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ingredient',
        key: 'id'
      }
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0.01
      },
    },

    UOM: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [units.GetAllIngredientUOMs().map(x => x.abbr)]
      }
    }
  },
  {
    sequelize
  }
)
module.exports = {
  UserGroceryList,
  GroceryListIngredients
};