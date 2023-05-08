const router = require('express').Router();
const { UserGroceryList } = require('../../models');
const helper = require('../util');

router.post('/', (req, res) => {
    helper.SafeCreate(res, UserGroceryList, {
        totalAmount: req.body.totalAmount,
        UOM: req.body.UOM
    })
});

router.get('/', (req, res) => {
    helper.SafeGetAll(res, UserGroceryList, [])
});

router.get('/:id', (req, res) => {
    helper.SafeGetByID(req.params.id, res, UserGroceryList, [])
});

router.put('/:id', (req, res) => {
    helper.SafeUpdate(res, UserGroceryList, {
        totalAmount: req.body.totalAmount,
        UOM: req.body.UOM
    })
});

router.delete('/:id', (req, res) => {
    helper.SafeDelete(req.params.id, res, UserGroceryList)
});

module.exports = router;