const router = require('express').Router();
const {UserPassword, User} = require('../../models');
const bcrypt = require('bcrypt')
const helper = require('../util')

router.post('/', async (req, res) => {
    hash =  await bcrypt.hash(req.body.password, 5)
    helper.SafeCreate(res, UserPassword, {
    password: hash,
    userID: req.body.userID
    })
})

router.get('/', (req, res) => {
    helper.SafeGetAll(res, UserPassword, [])    
})

router.get('/:id', (req, res) => {
    helper.SafeGetByID(req.params.id, res, UserPassword, [])
})

router.put('/:id', async (req, res) => {
    hash =  await bcrypt.hash(req.body.password, 5)
    helper.SafeUpdate(req.params.id, res, UserPassword, {
        password: hash,
        userID: req.body.userID
    })
})

router.delete('/:id', (req, res) => {
    helper.SafeDelete(req.params.id, res, UserPassword)
})

module.exports = router;