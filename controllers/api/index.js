const router = require("express").Router();
const userRoutes = require('./userRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const recipeRoutes = require('./recipeRoutes')
const userPassword = require('./userPasswordRoutes')
const uomRoutes = require("./UOM");

router.use('/users', userRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/recipes', recipeRoutes);
router.use('/userpassword', userPassword)
router.use("/UOM", uomRoutes);

module.exports = router;