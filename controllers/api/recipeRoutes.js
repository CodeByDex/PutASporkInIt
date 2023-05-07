const router = require('express').Router();
const { request } = require('express');
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

router.post('/:id/votes', (req, res) => {
    let vote = helper.SafeCreate(res, RecipeUserVote, {
        recipeID: req.params.id,
        userID: req.session.userID,
        vote: req.body.vote
    })
    res.json(vote)
})

router.put('/:id/votes', (req, res) => {
    helper.SafeRequest(res, async(res) => {
    RecipeUserVote.findOne( {where: { recipeID: req.params.id, userID: req.session.userID }})
    
    vote.set({vote: req.body.vote})

    vote = await vote.save()
    })
})

router.delete('/:id/votes', (req, res) => {
    helper.SafeRequest(res, async(res) => {

   const voteResult = await RecipeUserVote.destroy({ where: { recipeID: req.params.id, userID: req.session.userID }})
    res.json(voteResult)
    })
    
})

module.exports = router;