const router = require("express").Router();
const userRoutes = require('./userRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const recipeRoutes = require('./recipeRoutes')

router.use('/users', userRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/recipes', recipeRoutes)
module.exports = router;