const router = require("express").Router();
const { User, UserRecipeFavorite } = require('../../models');
const helper = require('../util')
const UserPassword = require('../../models/userPassword');

/************************************************
 * Unsecured
 ***********************************************/

//create new user
router.post('/', (req, res) => {

    helper.SafeRequest(res, async (res) => {
        const newUser = await User.createUser(req.body.userName, req.body.email, req.body.password)

        req.session.save(() => {
            setLoginInfo(req, newUser.id, res);

            res.json(newUser)
        })

    });
})

router.get('/', (req, res) => {
    helper.SafeGetAll(res, User, [])
})

router.get('/:id', (req, res) => {
    helper.SafeGetByID(req.params.id, res, User, [])
})

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        // Remove the session variables
        req.session.destroy(() => {
            delete res.locals.userID;
            res.locals.loggedIn = false;
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.get("/:userID/Favorites", (req, res) => {
    helper.SafeGetAll(res, UserRecipeFavorite, [], { userID: req.params.userID });
});

function setLoginInfo(req, id, res) {
    req.session.userID = id;
    req.session.loggedIn = true;

    res.locals.userID = id;
    res.locals.loggedIn = true;
}

router.post('/login', async (req, res) => {

    const userData = await User.findOne({ where: { email: req.body.email } })
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
            .json({ message: "wrong password" })
        return;
    }

    req.session.save(() => {
        setLoginInfo(req, userData.id, res);
        res.status(200).json({
            message: "Logged in!"
        })
    })
});

router.post('/logout', async (req, res) => {

    req.session.save(() => {
        delete req.session.user_id;
        req.session.loggedIn = false;
        res.status(200).json({
            message: "Logged out!"
        })
    })
});

/**********************************************
 * Secured Calls
 **********************************************/

router.use(helper.VerifyLoggedIn)

router.post("/:userID/Favorites", (req, res) => {
    helper.SafeCreate(res, UserRecipeFavorite, {
        userID: req.params.userID,
        recipeID: req.body.recipeID
    })
});

router.put('/:id', (req, res) => {
    helper.SafeUpdate(req.params.id, res, User, {
        userName: req.body.userName,
        email: req.body.email
    })
});

router.delete('/:id', (req, res) => {
    helper.SafeDelete(req.params.id, res, User)
});

router.delete("/:userID/Favorites/:id", (req, res) => {
    helper.SafeDelete(req.params.id, res, UserRecipeFavorite);
});

module.exports = router;