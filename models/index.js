const Ingredient = require("./ingredient");
const {Recipe, RecipeIngredient } = require('./recipe');
const User = require("./user");
const UserPassword = require("./userPassword");

Recipe.belongsTo(User, {
    foreignKey: "userID"
});

User.hasMany(Recipe, {
    foreignKey: "userID",
    onDelete: "CASCADE"
});

RecipeIngredient.belongsTo(Recipe, {
    foreignKey: "recipeID"
});

Recipe.hasMany(RecipeIngredient, {
    foreignKey: "recipeID",
    onDelete: "CASCADE"
});

RecipeIngredient.belongsTo(Ingredient, {
    foreignKey: "ingredientID"
});

Ingredient.hasMany(RecipeIngredient, {
    foreignKey: "ingredientID",
    onDelete: "RESTRICT"
})

User.hasMany(UserPassword, {
    foreignKey: "userID",
    onDelete: "CASCADE"
})

UserPassword.belongsTo(User, {
    foreignKey: "userID"
});

module.exports = { Recipe, RecipeIngredient, Ingredient, User };