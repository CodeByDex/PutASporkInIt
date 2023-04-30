const router = require('express').Router();
const {Ingredient} = require('../../models');
const helper = require('../util')

router.post('/', (req, res) => {
    helper.SafeCreate(res, Ingredient, {
    name: req.body.name,
    defaultUOM: req.body.defaultUOM,
    })
})

router.get('/', (req, res) => {
    helper.SafeGetAll(res, Ingredient, [])    
})

router.get('/:id', (req, res) => {
    helper.SafeGetByID(req.params.id, res, Ingredient, [])
})
module.exports = router;