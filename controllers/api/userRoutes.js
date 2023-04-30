const router = require('express').Router();
const {User} = require('../../models');
const helper = require('../util')


//create new user
router.post('/', (req, res) => {
    helper.SafeCreate(res, User, {
    userName: req.body.userName,
    email: req.body.email,
    })
})

router.get('/', (req, res) => {
    helper.SafeGetAll(res, User, [])    
})

router.get('/:id', (req, res) => {
    helper.SafeGetByID(req.params.id, res, User, [])
})

router.put('/:id', (req, res) => {
    helper.SafeUpdate(req.params.id, res, User, {
        userName: req.body.userName,
        email: req.body.email
    })
})

router.delete('/:id', (req, res) => {
    helper.SafeDelete(req.params.id, res, User)
})
module.exports = router;