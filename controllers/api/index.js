const router = require("express").Router();
const userRoutes = require('./userRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const recipeRoutes = require('./recipeRoutes');
const uomRoutes = require("./UOM");
const groceryRoutes = require('./groceryRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use("/UOM", uomRoutes);

//need security added before making public
// router.use('/ingredients', ingredientRoutes);
// router.use('/UserGroceryList', groceryRoutes);

module.exports = router;