const router = require('express').Router();
const {User} = require('../../models');
const helper = require('../util')
const bcrypt = require('bcrypt')
const UserPassword = require('../../models/userPassword');


//create new user
router.post('/', (req, res) => {

    helper.SafeRequest(res, async (res) => {
        const newUser = await User.createUser(req.body.userName, req.body.email, req.body.password)

        req.session.save(() => {
            req.session.userID = newUser.id,
            req.session.loggedIn = true;
        })
       
        res.json(newUser)

        //todo: page is not redirecting after successful user create
        
    });
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

router.post('/login', async (req, res) => {


    // req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.loggedIn = true;
        
    //     res.json({ user: userData, message: 'You are now logged in!' });
    //   });

    const userData = await User.findOne({ where: { email: req.body.email}})
    if (!userData) {
        res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
        return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    
    if (!validPassword) {
        res
            .status(400)
            .json({message: "wrong password"})
        return;
    }

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
    })


    res.status(200).json({
        message: "Logged in!"  
    })
});
  
  module.exports = router;