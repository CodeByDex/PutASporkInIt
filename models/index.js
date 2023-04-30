const Ingredient = require("./ingredient");
const Recipe = require('./recipe');
const User = require("./user");
const UserPassword = require("./userPassword");

Recipe.belongsTo(User, {
    foreignKey: "userID"
});

User.hasMany(Recipe, {
    foreignKey: "userID",
    onDelete: "CASCADE"
});

Recipe.belongsToMany(Ingredient, {
    through: "RecipeIngredient"
});

Ingredient.belongsToMany(Recipe,{
    through: "RecipeIngredient"
});

User.hasMany(UserPassword, {
    foreignKey: "userID",
    onDelete: "CASCADE"
})

UserPassword.belongsTo(User, {
    foreignKey: "userID"
});

module.exports = { Recipe, Ingredient, User, UserPassword };