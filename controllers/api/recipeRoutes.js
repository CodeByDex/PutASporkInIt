const router = require('express').Router();
const { Recipe, RecipeUserVote } = require('../../models');
const helper = require('../util')

/************************************************
 * Unsecured
 ************************************************/
router.get('/', (req, res) => {
    helper.SafeGetAll(res, Recipe, [])
})

router.get('/:id', (req, res) => {
    helper.SafeGetByID(req.params.id, res, Recipe, [])
})

router.get('/:id/votes', (req, res) => {
    helper.SafeRequest(res, async(res) => {
        
        const voteData = await RecipeUserVote.findAll({ where: { recipeID: req.params.id }})
        
        let voteResults;
        if(!voteData){
            voteResults =[]
        }
        else {
            voteResults=voteData.map(obj => obj.get())
        }
        res.json({voteResults}) 
    })
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
})

router.delete('/:id', (req, res) => {
    helper.SafeDelete(req.params.id, res, Recipe)
})

module.exports = router;