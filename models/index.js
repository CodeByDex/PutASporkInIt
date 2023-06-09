const Ingredient = require("./ingredient");
const { Recipe, RecipeIngredient, RecipeUserVote } = require('./recipe');
const { User, UserRecipeFavorite } = require("./user");
const UserPassword = require("./userPassword");
const { UserGroceryList, GroceryListIngredients } = require("./grocery")

Recipe.belongsTo(User, {
    foreignKey: "userID",
    onDelete: "CASCADE"
});

User.hasMany(Recipe, {
    foreignKey: "userID",
    onDelete: "CASCADE"
});

RecipeIngredient.belongsTo(Recipe, {
    foreignKey: "recipeID",
    onDelete: "CASCADE"
});

Recipe.hasMany(RecipeIngredient, {
    foreignKey: "recipeID",
    onDelete: "CASCADE"
});

RecipeIngredient.belongsTo(Ingredient, {
    foreignKey: "ingredientID",
    onDelete: "RESTRICT"
});

Ingredient.hasMany(RecipeIngredient, {
    foreignKey: "ingredientID",
    onDelete: "RESTRICT"
})

RecipeUserVote.belongsTo(Recipe, {
    foreignKey: "recipeID",
    onDelete: "CASCADE"
})

Recipe.hasMany(RecipeUserVote, {
    foreignKey: "recipeID",
    onDelete: "CASCADE"
})

RecipeUserVote.belongsTo(User, {
    foreignKey: "userID",
    onDelete: "CASCADE"
})

User.hasMany(RecipeUserVote, {
    foreignKey: "userID",
    onDelete: "CASCADE"
})

User.hasMany(UserPassword, {
    foreignKey: "userID",
    onDelete: "CASCADE"
})

UserPassword.belongsTo(User, {
    foreignKey: "userID",
    onDelete: "CASCADE"
});

User.hasMany(UserRecipeFavorite, {
    foreignKey: "userID",
    onDelete: "CASCADE"
});

UserRecipeFavorite.belongsTo(User, {
    foreignKey: "userID",
    onDelete: "CASCADE"
});

Recipe.hasMany(UserRecipeFavorite, {
    foreignKey: "recipeID",
    onDelete: "CASCADE"
});

UserRecipeFavorite.belongsTo(Recipe, {
    foreignKey: "recipeID",
    onDelete: "CASCADE"
});

UserGroceryList.belongsTo(User, {
    foreignKey: 'userID',
    onDelete: "CASCADE"
});

User.hasMany(UserGroceryList, {
    foreignKey: "userID",
    onDelete: "CASCASE"
});

UserGroceryList.belongsTo(Recipe, {
    foreignKey: 'recipeID',
    onDelete: "CASCADE"
});

Recipe.hasMany(UserGroceryList, {
    foreignKey: 'recipeID',
    onDelete: 'CASCADE'
});

GroceryListIngredients.belongsTo(UserGroceryList, {
    foreignKey: 'groceryListID',
    onDelete: "CASCADE"
});

UserGroceryList.hasMany(GroceryListIngredients, {
    foreignKey: 'groceryListID',
    onDelete: 'CASCADE'
});

GroceryListIngredients.belongsTo(Ingredient, {
    foreignKey: 'ingredientID',
    onDelete: "CASCADE"
});

Ingredient.hasMany(GroceryListIngredients, {
    foreignKey: 'ingredientID',
    onDelete: 'CASCADE'
})

module.exports = { Recipe, RecipeIngredient, RecipeUserVote, Ingredient, User, UserRecipeFavorite, UserGroceryList, GroceryListIngredients };