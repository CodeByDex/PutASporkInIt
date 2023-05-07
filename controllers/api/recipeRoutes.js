const router = require('express').Router();
const { Recipe } = require('../../models');
const helper = require('../util')

/************************************************
 * Unsecured
 ************************************************/
router.get('/', (req, res) => {
    helper.SafeGetAll(res, Recipe, [])
})

router.get('/:id', (req, res) => {
    if (!isNaN(recipe.id) && recipe.id != -1) {
        helper.SafeGetByID(req.params.id, res, Recipe, [])
    } else {
        res.json('id must be greater than 0')
    }
})

    /************************************************
     * Secured
     ************************************************/

    router.use(helper.VerifyLoggedIn);

    router.post('/', (req, res) => {
        helper.SafeCreate(res, Recipe, {
            name: req.body.name,
            userID: req.session.userID,
            seenIn: req.body.seenIn,
            description: req.body.description,
            instructions: req.body.instructions,
            sourceURL: req.body.sourceURL,
            activeTime: req.body.activeTime,
            activeTimeUOM: req.body.activeTimeUOM,
            totalTime: req.body.totalTime,
            totalTimeUOM: req.body.totalTimeUOM,
            complexity: req.body.complexity
        })
    })

    router.put('/:id', (req, res) => {
        if (!isNaN(req.params.id) && req.params.id > 0) {
            helper.SafeUpdate(req.params.id, res, Recipe, {
                name: req.body.name,
                userID: req.session.userID,
                seenIn: req.body.seenIn,
                description: req.body.description,
                instructions: req.body.instructions,
                sourceURL: req.body.sourceURL,
                activeTime: req.body.activeTime,
                activeTimeUOM: req.body.activeTimeUOM,
                totalTime: req.body.totalTime,
                totalTimeUOM: req.body.totalTimeUOM,
                complexity: req.body.complexity
            })
        } else {
            res.json('id must be greater than 0')
        }
    })

    router.delete('/:id', (req, res) => {
        if (!isNaN(req.params.id) && req.params.id > 0) {
            helper.SafeDelete(req.params.id, res, Recipe)
        } else {
            res.json('id must be greater than 0')
        }
    })

    module.exports = router;