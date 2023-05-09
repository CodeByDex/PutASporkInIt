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
});

router.get('/', (req, res) => {
    helper.SafeGetAll(res, User, [])
});

router.get('/:id', (req, res) => {
    if (!isNaN(req.params.id) && req.params.id > 0) {
        helper.SafeGetByID(req.params.id, res, User, [])
    } else {
        res.json('id must be greater than 0')
    }
});

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
    if (!isNaN(req.params.userID) && req.params.userID > 0) {
        helper.SafeGetAll(res, UserRecipeFavorite, [], { userID: req.params.userID });
    } else {
        res.json('id must be greater than 0')
    }
});

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
    if (!isNaN(req.params.userID) && req.params.userID > 0) {
        if (req.params.userID != req.session.userID) {
            res.status(401).json("Not Authorized");
        } else {
            helper.SafeCreate(res, UserRecipeFavorite, {
                userID: req.params.userID,
                recipeID: req.body.recipeID
            })
        }
    } else {
        res.json('id must be greater than 0')
    }
});

router.put('/:id', (req, res) => {
    if (!isNaN(req.params.id) && req.params.id > 0) {
        if (req.params.id != req.session.userID) {
            res.status(401).json("Not Authorized");
        } else {
            helper.SafeUpdate(req.params.id, res, User, {
                userName: req.body.userName,
                email: req.body.email
            })
        }
    } else {
        res.json('id must be greater than 0')
    }
});

router.delete('/:id', (req, res) => {
    if (!isNaN(req.params.id) && req.params.id > 0) {
        if (req.params.id != req.session.userID) {
            res.status(401).json("Not Authorized");
        } else {
            helper.SafeDelete(req.params.id, res, User)
        }
    } else {
        res.json('id must be greater than 0')
    }
});

router.delete("/:userID/Favorites/:id", (req, res) => {
    if (!isNaN(req.params.userID) && req.params.userID > 0) {
        if (req.params.userID != req.session.userID) {
            res.status(401).json("Not Authorized");
        } else {
            helper.SafeDelete(req.params.id, res, UserRecipeFavorite);
        }
    } else {
        res.json('id must be greater than 0')
    }
});

module.exports = router;

/***************************************************************
 * Private Functions
 **************************************************************/
/**
 * Sets both the session and local values needed in the application.
 * @param {request} req 
 * @param {int} id 
 * @param {response} res 
 */
function setLoginInfo(req, id, res) {
    req.session.userID = id;
    req.session.loggedIn = true;

    res.locals.userID = id;
    res.locals.loggedIn = true;
}