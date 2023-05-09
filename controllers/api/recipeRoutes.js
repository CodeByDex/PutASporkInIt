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
    if (!isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeGetByID(req.params.id, res, Recipe, [])
    } else {
        res.status(500).json('id must be greater than 0')
    }
})

router.get('/:id/votes', (req, res) => {
    if (isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeRequest(res, async (res) => {

            const voteData = await RecipeUserVote.findAll({ where: { recipeID: req.params.id } })

            let voteResults;
            if (!voteData) {
                voteResults = []
            }
            else {
                voteResults = voteData.map(obj => obj.get())
            }
            res.json({ voteResults })
        });
    } else {
        res.status(500).json('id must be greater than 0')
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
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        sourceURL: req.body.sourceURL,
        activeTime: req.body.activeTime,
        activeTimeUOM: req.body.activeTimeUOM,
        totalTime: req.body.totalTime,
        totalTimeUOM: req.body.totalTimeUOM,
        complexity: req.body.complexity,
        thumbnailURL: req.body.thumbnailURL
    })
})

router.put('/:id', async (req, res) => {
    if (!isNaN(req.params.id) && req.params.id > 0) {

        let toUpdate = await Recipe.findByPk(req.params.id);

        let ownerID = toUpdate ? toUpdate.get().userID : {};

        if (ownerID !== req.session.userID) {
            res.status(401).json("Recipe Does Not Belong to Requesting User");
        } else {

            helper.SafeUpdate(req.params.id, res, Recipe, {
                name: req.body.name,
                userID: req.session.userID,
                seenIn: req.body.seenIn,
                description: req.body.description,
                ingredients: req.body.ingredients,
                instructions: req.body.instructions,
                sourceURL: req.body.sourceURL,
                activeTime: req.body.activeTime,
                activeTimeUOM: req.body.activeTimeUOM,
                totalTime: req.body.totalTime,
                totalTimeUOM: req.body.totalTimeUOM,
                complexity: req.body.complexity,
                thumbnailURL: req.body.thumbnailURL
            })
        }
    } else {
        res.status(500).json('id must be greater than 0')
    }
})

router.delete('/:id', (req, res) => {
    if (!isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeRequest(res, async (res) => {
            let toDelete = await Recipe.findByPk(req.params.id);

            let ownerID = toDelete ? toDelete.get().userID : {};

            if (ownerID !== req.session.userID) {
                res.status(401).json("Recipe Does Not Belong to Requesting User");
            } else {

                toDelete = await toDelete.destroy();
                res.json(toDelete);
            }
        });
    } else {
        res.status(500).json('id must be greater than 0')
    }
});

router.post('/:id/votes', (req, res) => {
    if (!isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeCreate(res, RecipeUserVote, {
            recipeID: req.params.id,
            userID: req.session.userID,
            vote: req.body.vote
        })
    } else {
        res.status(500).json('id must be greater than 0')
    }
});

router.put('/:id/votes', (req, res) => {
    if (!isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeRequest(res, async (res) => {
            let vote = await RecipeUserVote.findOne({ where: { recipeID: req.params.id, userID: req.session.userID } })

            vote.set({ vote: req.body.vote })

            vote = await vote.save()

            res.json(vote)
        })
    } else {
        res.status().json('id must be greater than 0')
    }
});

router.delete('/:id/votes', (req, res) => {
    if (!isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeRequest(res, async (res) => {

            const voteResult = await RecipeUserVote.destroy({ where: { recipeID: req.params.id, userID: req.session.userID } })
            res.json(voteResult)
        })
    } else {
        res.status().json('id must be greater than 0')
    }
});

module.exports = router;
