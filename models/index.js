const Ingredient = require("./ingredient");
const {Recipe, RecipeIngredient } = require('./recipe');
const {User, UserRecipeFavorite} = require("./user");
const UserPassword = require("./userPassword");
const {UserGroceryList, GroceryListIngredients} = require("./grocery")

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

User.hasMany(UserRecipeFavorite, {
    foreignKey: "userID",
    onDelete: "CASCADE"
});

UserRecipeFavorite.belongsTo(User, {
    foreignKey: "userID"
});

Recipe.hasMany(UserRecipeFavorite, {
    foreignKey: "recipeID",
    onDelete: "CASCADE"
});

UserRecipeFavorite.belongsTo(Recipe, {
    foreignKey: "recipeID"
});

UserGroceryList.belongsTo(User, {
    foreignKey: 'userID'
});

User.hasMany(UserGroceryList, {
    foreignKey: "userID",
    onDelete: "CASCASE"
});

UserGroceryList.belongsTo(Recipe, {
    foreignKey: 'recipeID'
});

Recipe.hasMany(UserGroceryList, {
    foreignKey: 'recipeID',
    onDelete: 'CASCADE'
});

GroceryListIngredients.belongsTo(UserGroceryList, {
    foreignKey: 'groceryListID'
});

UserGroceryList.hasMany(GroceryListIngredients, {
    foreignKey: 'groceryListID',
    onDelete: 'CASCADE'
});

GroceryListIngredients.belongsTo(Ingredient, {
    foreignKey: 'ingredientID'
});

Ingredient.hasMany(GroceryListIngredients, {
    foreignKey: 'ingredientID',
    onDelete: 'CASCADE'
})

module.exports = { Recipe, RecipeIngredient, Ingredient, User, UserRecipeFavorite, UserGroceryList, GroceryListIngredients };