const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const units = require("../utils/Units");

class Recipe extends Model {}
class RecipeIngredient extends Model {}

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
    thumbnailURL: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "https://i.ibb.co/h23wxGn/placeholder-image.jpg"
    },
    seenIn: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ingredients: {
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
      allowNull: false,
      validate: {
        isIn: [units.GetTimeUOMs().map(x=>x.abbr)]
      }
    },
    totalTime: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    totalTimeUOM: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [units.GetTimeUOMs().map(x=>x.abbr)]
      }
    },
    complexity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    thumbnailURL: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    hooks: {
      beforeCreate: async (recipe) => {
        if (!recipe.thumbnailURL) {
          recipe.thumbnailURL = "https://i.ibb.co/h23wxGn/placeholder-image.jpg";
        }
      },
      beforeUpdate: async (recipe) => {
        if (!recipe.thumbnailURL) {
          recipe.thumbnailURL = "https://i.ibb.co/h23wxGn/placeholder-image.jpg";
        }
      },
    }
  }
);

RecipeIngredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    recipeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "recipe",
        key: "id"
      }
    },
    ingredientID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model:"ingredient",
        key: "id"
      }
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        min: 0.01
      }
    },
    UOM: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [units.GetAllIngredientUOMs().map(x=>x.abbr)]
      }
    }
  },
  {
    sequelize
  }
)

module.exports = {
  Recipe,
  RecipeIngredient
};