const router = require('express').Router();
const {Ingredient} = require('../../models');
const helper = require('../util')

router.post('/', (req, res) => {
    helper.SafeCreate(res, Ingredient, {
    name: req.body.name,
    defaultUOM: req.body.defaultUOM,
    })
})
module.exports = router;