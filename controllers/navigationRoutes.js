const router = require("express").Router();
const { User, UserPassword, Recipe, Ingredient, RecipeIngredient } = require('../models');

/************************************************
 * Unsecured
 ************************************************/

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
});

router.get("/recipe/:id/edit", async (req, res) => {
  let recipe = await getRecipeViewModel(req.params.id);

  res.render('recipe', recipe);
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
  console.log(allRecipes)
  res.render('browse', {allRecipes});
})

/**********************************************
 * Secured Calls
 **********************************************/
router.use(helper.VerifyLoggedIn);

// GET route for dashboard page (user profile/account)
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

module.exports = router;

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
