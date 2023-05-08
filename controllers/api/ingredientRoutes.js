const router = require('express').Router();
const { Ingredient } = require('../../models');
const helper = require('../util');

/************************************************
 * Unsecured
 ************************************************/
router.get('/', (req, res) => {
    helper.SafeGetAll(res, Ingredient, [])
});

router.get('/:id', (req, res) => {
    helper.SafeGetByID(req.params.id, res, Ingredient, [])
});

/************************************************
 * Secured
 ************************************************/
router.use(helper.VerifyLoggedIn);

router.put('/:id', (req, res) => {
    helper.SafeUpdate(req.params.id, res, Ingredient, {
        name: req.body.name,
        defaultUOM: req.body.defaultUOM
    })
});

router.delete('/:id', (req, res) => {
    helper.SafeDelete(req.params.id, res, Ingredient)
});

router.post('/', (req, res) => {
    helper.SafeCreate(res, Ingredient, {
        name: req.body.name,
        defaultUOM: req.body.defaultUOM,
    })
});

module.exports = router;