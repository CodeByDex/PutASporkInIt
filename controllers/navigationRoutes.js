const router = require("express").Router();
const { User, UserPassword, Recipe, Ingredient } = require('../models');


// GET route for login page
router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login');
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
  res.render('dashboard')
})

// GET route for recipe page
router.get('/recipe/:id', async (req, res) => {
  const recipe = await Recipe.findByPk(req.params.id)
  const recipeData = recipe.get()

  // Capitalize first letter of complexity
  recipeData.complexity = recipeData.complexity.charAt(0).toUpperCase() + recipeData.complexity.slice(1);
  
  console.log(recipeData)
  res.render('recipe', {recipeData});
})

// GET route for browser page
router.get('/browse', async (req, res) => {
  const recipes = await Recipe.findAll({})
  const allRecipes = recipes.map(obj => obj.get())
  console.log(allRecipes)
  res.render('browse', {allRecipes});
})


module.exports = router;