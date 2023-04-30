const router = require("express").Router();
const units = require("../../utils/Units");

router.get("/ingredient", (req, res) => {
    res.json(units.GetAllIngredientUOMs());
});

router.get("/time", (req, res) => {
    res.json(units.GetTimeUOMs());
})

module.exports = router;