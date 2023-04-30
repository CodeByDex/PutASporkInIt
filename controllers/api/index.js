const router = require("express").Router();
const userRoutes = require('./userRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const recipeRoutes = require('./recipeRoutes')
const userPassword = require('./userPasswordRoutes')

router.use('/users', userRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/recipes', recipeRoutes);
router.use('/userPassword', userPassword)
module.exports = router;