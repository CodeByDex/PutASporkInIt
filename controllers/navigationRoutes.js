const router = require("express").Router();
const { User, UserPassword, Recipe, Ingredient } = require('../models');


// GET route for login page
router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }git
  
    res.render('login');
  });

  // GET route for home page
  router.get('/', async (req, res) => {
    const recipes = await Recipe.findAll({})
    // Pull in first three recipes in array
    const topThreeRecipes = recipes.slice(0, 3)
    if (!req.session.loggedIn) {
      req.session.loggedIn = false
    }
    res.render('home', { topRecipes: topThreeRecipes, loggedIn: true})
  })


  // GET route for dashboard page (user profile/account)
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

  // GET route for recipe page
  router.get('/recipe/:id', (req, res) => {
    res.render('recipe');
  })

  // GET route for browser page
  router.get('/browse', async (req, res) => {
    const recipes = await Recipe.findAll({})
    res.render('browse', { recipeContent: recipes});
  })


module.exports = router;