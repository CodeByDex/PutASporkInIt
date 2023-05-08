const router = require('express').Router();
const { Ingredient } = require('../../models');
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
    if (!isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeGetByID(req.params.id, res, Ingredient, [])
    } else {
        res.status(500).json('id must be greater than 0')
    }
})

router.put('/:id', (req, res) => {
    if (!isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeUpdate(req.params.id, res, Ingredient, {
            name: req.body.name,
            defaultUOM: req.body.defaultUOM
        })
    } else {
        res.status(500).json('id must be greater than 0')
    }
})

router.delete('/:id', (req, res) => {
    if (!isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeDelete(req.params.id, res, Ingredient)
    } else {
        res.status(500).json('id must be greater than 0')
    }
})

module.exports = router;