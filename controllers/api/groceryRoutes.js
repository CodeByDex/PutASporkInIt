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
    if (!isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeGetByID(req.params.id, res, UserGroceryList, [])
    } else {
        res.status(500).json('id must be greater than 0')
    }
});

router.put('/:id', (req, res) => {
    if (!isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeUpdate(res, UserGroceryList, {
            totalAmount: req.body.totalAmount,
            UOM: req.body.UOM
        })
    } else {
        res.status(500).json('id must be greater than 0')
    }
    });

router.delete('/:id', (req, res) => {
    if (!isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeDelete(req.params.id, res, UserGroceryList)
    } else {
        res.status(500).json('id must be greater than 0')
    }
});

module.exports = router;