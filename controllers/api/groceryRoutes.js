const router = require('express').Router();
const {Grocery} = require('../../models');
const helper = require('../util');

router.post('/', (req, res) => {
helper.SafeCreate(res, Grocery, {
    totalAmount: req.body.totalAmount,
    UOM: req.body.UOM
})
});

router.get('/', (req, res) => {
helper.SafeGetAll(res, Grocery, [])
});

router.get('/:id', (req, res) => {
helper.SafeGetByID(req.params.id, res, Grocery, [])
});

router.put('/:id', (req, res) => {
helper.SafeUpdate(res, Grocery, {
    totalAmount: req.body.totalAmount,
    UOM: req.body.UOM
})
});

router.delete('/:id', (req, res) => {
helper.SafeDelete(req.params.id, res, Grocery)
});

module.exports = router;