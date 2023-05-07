const router = require('express').Router();
const { UserPassword, User } = require('../../models');
const bcrypt = require('bcrypt')
const helper = require('../util')

router.post('/', async (req, res) => {
    helper.SafeRequest(res, async (res) => {
        hash = await bcrypt.hash(req.body.password, 5)
        helper.SafeCreate(res, UserPassword, {
            password: hash,
            userID: req.body.userID
        })
    })
})

        router.get('/', (req, res) => {
            helper.SafeGetAll(res, UserPassword, []);
        })

        router.get('/:id', (req, res) => {
            if (!isNaN(req.params.id) && req.params.id > 0) {
                helper.SafeGetByID(req.params.id, res, UserPassword, []);
            } else {
                res.status(500).json('id must be greater than 0')
            }

        })

        router.put('/:id', async (req, res) => {
            if (!isNaN(req.params.id) && req.params.id > 0) {
            hash = await bcrypt.hash(req.body.password, 5)
            helper.SafeUpdate(req.params.id, res, UserPassword, {
                password: hash,
                userID: req.body.userID
            });
        } else {
            res.status(500).json('id must be greater than 0')
        }
    })

    router.delete('/:id', (req, res) => {
        if (!isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeDelete(req.params.id, res, UserPassword)
        } else {
            res.status(500).json('id must be greater than 0')
        }
    })

    module.exports = router;