const router = require("express").Router();
const { User, UserPassword, Recipe, Ingredient, RecipeIngredient } = require('../models');


// GET route for login page -- Nathan
router.get('/login', (req, res) => {

  res.render("login");
});

// GET route for home page
router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll({})
  // Pull in first three recipes in array
  const topThreeRecipes = recipes.slice(0, 3)
  const topRecipes = topThreeRecipes.map(obj => obj.get())
  console.log(topRecipes)
  res.render('home', {topRecipes})
})


// GET route for dashboard page (user profile/account)
router.get('/dashboard', (req, res) => {
  helper.SafeRequest(res, async (res) => {
    let recipe = {}
    recipe.id = req.params.id

    if(!isNaN(recipe.id) && recipe.id != -1) {
      recipe = await getRecipeViewModel(recipe.id)
    }
  })   
  res.render('dashboard')
})


// GET route for recipe page
router.get('/recipe/:id', async (req, res) => {
  helper.SafeRequest(res, async (res) => {
    let recipe = {}
    recipe.id = req.params.id

    if(!isNaN(recipe.id) && recipe.id != -1) {
      recipe = await getRecipeViewModel(recipe.id);
  const recData = await Recipe.findByPk(req.params.id, {
    include: {
      model: RecipeIngredient,
      include: Ingredient
    }
  });

  let recipe = recData.get();
  recipe.RecipeIngredients = recipe.RecipeIngredients.map(x => {
    let recIng = x.get();
    let ing = recIng.Ingredient.get();


    return {
      amount: recIng.amount,
      UOM: recIng.UOM,
      name: ing.name
    };
  })

  res.render('recipe', recipe)
}

// GET route for browser page
router.get('/browse', async (req, res) => {
  helper.SafeRequest(res, async (res) => {
    let recipe = {}
    recipe.id = req.params.id

    if(!isNaN(recipe.id) && recipe.id != -1) {
      recipe = await getRecipeViewModel(recipe.id)
    };
  const recipes = await Recipe.findAll({})
  //TODO: Implement UserRecipeFavorite get conditionally if the user is logged in
  const allRecipes = recipes.map(obj => obj.get())
  console.log(allRecipes)
  res.render('browse', {allRecipes});
})


module.exports = router;