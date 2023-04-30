const router = require('express').Router();
const {Recipe} = require('../../models');
const helper = require('../util')

router.post('/', (req, res) => {
    helper.SafeCreate(res, Recipe, {
    name: req.body.name,
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

module.exports = router;