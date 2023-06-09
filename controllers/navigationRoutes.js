const router = require("express").Router();
const helper = require('./util')
const units = require("../utils/Units");
const sequelize = require("sequelize");
const { User, Recipe, Ingredient, RecipeIngredient, UserRecipeFavorite, RecipeUserVote } = require('../models');

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
  helper.SafeRequest(res, async (res) => {
    const topRecipes = await getRecipesSorted(req, 3);

    res.render('home', { topRecipes })
  })
});

// GET route for recipe page
router.get('/recipe/:id', async (req, res) => {
  if (!isNaN(req.params.id) && req.params.id > 0) {
    helper.SafeRequest(res, async (res) => {
      let recipe = await getRecipeViewModel(req.params.id, req);

      if (recipe == null) {
        res.status(404).render("404");
        return;
      }

      res.render('recipe', recipe);

    })
  } else {
    res.status(400).render("404", { errorMessage: "id must be greater than 0" });
  }
})

// GET route for browser page
router.get('/browse', async (req, res) => {
  helper.SafeRequest(res, async (res) => {
    const allRecipes = await getRecipesSorted(req);

    res.render('browse', { allRecipes });
  })
})

/**********************************************
 * Secured Calls
 **********************************************/
router.use(helper.VerifyLoggedIn);

// GET route for edit/create recipe page
router.get("/recipe/:id/edit", async (req, res) => {

  helper.SafeRequest(res, async (res) => {

    let recipe = {};

    recipe.id = req.params.id

    if (!isNaN(recipe.id) && recipe.id != 0) {
      recipe = await getRecipeViewModel(recipe.id, req);
      if (recipe == null) {
        res.status(404).render("404");
        return;
      }
    } else {
      recipe.id = 0;
      recipe.activeTimeUOM = "min";
      recipe.totalTimeUOM = "h";
      recipe.complexity = "Intermediate"
    };

    recipe.timeUOMs = units.GetTimeUOMs().map(x => {
      return { value: x.abbr, display: x.singular }
    })

    res.render('recipe-edit', recipe);

  })
})

// GET route for dashboard page (user profile/account)
router.get('/dashboard', async (req, res) => {
  helper.SafeRequest(res, async (res) => {
    const user = await User.findOne({
      where: {
        id: req.session.userID
      },
      attributes: ['userName']
    })
    const userFavorites = await UserRecipeFavorite.findAll({
      where: {
        userID: req.session.userID
      },
      include: {
        model: Recipe
      }
    })
    const userRecipeFav = await renderRecipe(userFavorites.map((x) => x.get().Recipe), req);

    const userRecipes = await Recipe.findAll({
      where: {
        userID: req.session.userID
      },
    })

    const x = await renderRecipe(userRecipes, req);
    res.render('dashboard', { userRecipeFav, userRecipes: x, userName: user.userName })
  })
})

module.exports = router;

/****************************************
 * Private Functions
 ******************************************/

async function getRecipesSorted(req, top) {
  let recipes = await Recipe.findAll({
    attributes: {
      include: [
        [
          sequelize.literal( `(
            COALESCE(
              (SELECT SUM(vote)
              FROM RecipeUserVote as V
              WHERE
                v.recipeID = Recipe.id
              ), 0)
          )`), 
          "voteSum"
        ]
      ]
    },
    order: [
      [sequelize.literal("voteSum"), "DESC"]
    ]
  });

  //if top is not provided, render all
  top = top ? top : recipes.length + 1;

  recipes = recipes.slice(0, top);

  recipes = await renderRecipe(recipes, req);
  return recipes;
}

async function renderRecipe(recipesToRender, req) {
  let recipes = await Promise.all(recipesToRender.map(async (obj) => {
    let recipe = obj.get();
    recipe.isUserRecipe = false;

    if (req.session.loggedIn) {
      recipe = await loadUserFavorite(req, recipe);
      recipe = await loadUserVote(req, recipe);
      // Add check for session user ID and recipe creator's user ID
      const isUserRecipe = req.session.userID === recipe.userID;
      recipe.isUserRecipe = isUserRecipe;
    }

    recipe = await loadVoteCount(req, recipe);
    
    return recipe;
  }));
  return recipes;
}
// finds the total 
async function loadVoteCount(req, recipe) {
  const recipeID = recipe.id

  let upvotes = await RecipeUserVote.count({
    where: {
      vote: 1,
      recipeID: recipeID
      }
  });

  let downvotes = await RecipeUserVote.count({
    where: {
      vote: -1,
      recipeID: recipeID
    }
  })

  recipe.upvoteCount = (upvotes - downvotes);
  
  return recipe
}

async function loadUserVote(req, recipe) {
  const uservote = await RecipeUserVote.findOne({
    where: {
      userID: req.session.userID,
      recipeID: recipe.id
    }
  })
  if (uservote == null) {
    recipe.upvote = null
    recipe.downvote = null
  } else {
    if (uservote.dataValues.vote === 1) {
      recipe.upvote = true
    } else if (uservote.dataValues.vote === -1) {
      recipe.downvote = true
    }
  }
  return recipe
}

async function loadUserFavorite(req, recipe) {
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
  return recipe
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

  if (!recData) {
    return null;
  }

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

  return recipe;
};