const router = require("express").Router();
const units = require("../../utils/Units");

/*******************************************
 * Unsecured
 ******************************************/
router.get("/ingredient", (req, res) => {
    res.json(units.GetAllIngredientUOMs());
});

router.get("/time", (req, res) => {
    res.json(units.GetTimeUOMs());
})

/**********************************************
 * Secured Calls
 **********************************************/

router.use(helper.VerifyLoggedIn)

module.exports = router;