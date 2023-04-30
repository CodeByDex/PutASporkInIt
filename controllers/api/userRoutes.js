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
module.exports = router;