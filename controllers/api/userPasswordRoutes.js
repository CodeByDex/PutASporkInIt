const router = require('express').Router();
const {UserPassword} = require('../../models');
const helper = require('../util')

router.post('/', (req, res) => {
    helper.SafeCreate(res, UserPassword, {
    password: req.body.password,
    userID: req.body.userID
    })
})

router.get('/', (req, res) => {
    helper.SafeGetAll(res, UserPassword, [])    
})

router.get('/:id', (req, res) => {
    helper.SafeGetByID(req.params.id, res, UserPassword, [])
})



module.exports = router;