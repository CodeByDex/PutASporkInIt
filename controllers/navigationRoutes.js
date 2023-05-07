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
});

// GET route for home page
router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll({})
  // Pull in first three recipes in array
  const topThreeRecipes = recipes.slice(0, 3)
  const topRecipes = await renderRecipe(topThreeRecipes, req);

  res.render('home', { topRecipes })
});

// GET route for recipe page
router.get('/recipe/:id', async (req, res) => {
  let recipe = await getRecipeViewModel(req.params.id, req);

  res.render('recipe', recipe);
})

// GET route for browser page
router.get('/browse', async (req, res) => {
  const recipes = await Recipe.findAll({})

  const allRecipes = await renderRecipe(recipes, req);

  res.render('browse', { allRecipes });
})

/**********************************************
 * Secured Calls
 **********************************************/
router.use(helper.VerifyLoggedIn);

router.get("/recipe/:id/edit", async (req, res) => {

  helper.SafeRequest(res, async (res) => {

    let recipe = {};

    recipe.id = req.params.id

    if (!isNaN(recipe.id) && recipe.id != -1) {
      recipe = await getRecipeViewModel(recipe.id, req);
    };

    res.render('recipe-edit', recipe);

  })
})

// GET route for dashboard page (user profile/account)
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

module.exports = router;

/****************************************
 * Private Functions
 ******************************************/

async function renderRecipe(recipesToRender, req) {
  let recipes = await Promise.all(recipesToRender.map(async (obj) => {
    let recipe = obj.get();
    if (req.session.loggedIn) {
      const userFavorites = await UserRecipeFavorite.findOne({
        where: {
          userID: req.session.userID,
          recipeID: recipe.id
        },
      });

      if (userFavorites == null) {
        recipe.favoriteid = 0;
      }
      else {
        const userFavRecipe = userFavorites.get();
        recipe.favoriteid = userFavRecipe.id;
      }
    }
    return recipe;
  }));
  return recipes;
}

async function getRecipeViewModel(id, req) {
  const recData = await Recipe.findByPk(id, {
    include: [{
      model: RecipeIngredient,
      include: Ingredient
      }, {
        model: User
      }
    ]
  });

  let recipe = await renderRecipe([recData], req);

  recipe = recipe[0];

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
  })

  recipe.userName = recipe.User ? recipe.User.get().userName : null;

  console.log(recipe);

  return recipe;
};

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
