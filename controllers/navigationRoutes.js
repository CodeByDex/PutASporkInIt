const router = require("express").Router();
const helper = require('./util')
const { User, Recipe, Ingredient, RecipeIngredient, UserRecipeFavorite } = require('../models');


/************************************************
 * Unsecured
 ************************************************/

// GET route for login page -- Nathan
router.get('/login', (req, res) => {
  res.render("login");
});

router.get('/newUser', (req, res) => {
  res.render('newUser')
})


// GET route for home page
router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll({})
  // Pull in first three recipes in array
  const topThreeRecipes = recipes.slice(0, 3)
  const topRecipes = topThreeRecipes.map(obj => obj.get())

  res.render('home', {topRecipes})
});

// GET route to edit a recipe
router.get("/recipe/:id/edit", async (req, res) => {

  helper.SafeRequest(res, async (res) => {

    let recipe = {};
  
    recipe.id = req.params.id
  
    if(!isNaN(recipe.id) && recipe.id != -1) {
      recipe = await getRecipeViewModel(recipe.id);
    };
  
    res.render('recipe-edit', recipe);

  })
})

// GET route for recipe page
router.get('/recipe/:id', async (req, res) => {
  let recipe = await getRecipeViewModel(req.params.id);

  res.render('recipe', recipe);
})

// GET route for browser page
router.get('/browse', async (req, res) => {
  const recipes = await Recipe.findAll({})
  //TODO: Implement UserRecipeFavorite get conditionally if the user is logged in
  const allRecipes = recipes.map(obj => obj.get())

  res.render('browse', {allRecipes});
})

/**********************************************
 * Secured Calls
 **********************************************/
router.use(helper.VerifyLoggedIn);

// GET route for dashboard page (user profile/account)
router.get('/dashboard', async (req, res) => {
  const userFavorites = await UserRecipeFavorite.findAll({
    where: {
      userID: req.session.userID
    },
    include: {
      model: Recipe
    }
  })
 const userRecipeFav = userFavorites.map(obj => obj.get().Recipe.get())

 const userRecipes = await Recipe.findAll({
    where: {
      userID: req.session.userID
    },
 })

  const x = userRecipes.map(obj => obj.get())

  res.render('dashboard', {userRecipeFav, userRecipes: x})
})

async function getRecipeViewModel(id) {
  const recData = await Recipe.findByPk(id, {
    include: {
      model: RecipeIngredient,
      include: Ingredient
    }
  });

  let recipe = recData.get();

  // Capitalize first letter of complexity
  recipe.complexity = recipe.complexity.charAt(0).toUpperCase() + recipe.complexity.slice(1);

  recipe.RecipeIngredients = recipe.RecipeIngredients.map(x => {
    let recIng = x.get();
    let ing = recIng.Ingredient.get();

    return {
      amount: recIng.amount,
      UOM: recIng.UOM,
      name: ing.name
    };
  });

  return recipe;

 
}

module.exports = router;
