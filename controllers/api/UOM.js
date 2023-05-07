const router = require("express").Router();
const units = require("../../utils/Units");

router.get("/ingredient", (req, res) => {
    helper.SafeRequest(res, async (res) => {
        res.json(units.GetAllIngredientUOMs());
    });

    router.get("/time", (req, res) => {
        helper.SafeRequest(res, async (res) => {
            res.json(units.GetTimeUOMs());
        })

        module.exports = router;