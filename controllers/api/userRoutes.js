const router = require('express').Router();
const { User, UserRecipeFavorite } = require('../../models');
const helper = require('../util')


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
if (!isNaN(req.params.id) && req.params.id > 0);

router.put('/:id', (req, res) => {
    helper.SafeUpdate(req.params.id, res, User, {
        userName: req.body.userName,
        email: req.body.email
    })
    if (!isNaN(req.params.id) && req.params.id > 0);
})

router.delete('/:id', (req, res) => {
    helper.SafeDelete(req.params.id, res, User)
})
if (!isNaN(req.params.id) && req.params.id > 0);


router.post('/logout', (req, res) => {
    helper.SafeRequest(res, async (res) => {
        if (req.session.logged_in) {
            // Remove the session variables
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    })
});


router.post("/:userID/Favorites", (req, res) => {
    helper.SafeCreate(res, UserRecipeFavorite, {
        userID: req.params.userID,
        recipeID: req.body.recipeID
    })
    if (!isNaN(req.params.id) && req.params.id > 0);
});

router.get("/:userID/Favorites", (req, res) => {
    helper.SafeGetAll(res, UserRecipeFavorite, [], { userID: req.params.userID });
    if (!isNaN(req.params.id) && req.params.id > 0);
});

router.delete("/:userID/Favorites/:id", (req, res) => {
    helper.SafeDelete(req.params.id, res, UserRecipeFavorite);
    if (!isNaN(req.params.id) && req.params.id > 0);
});

module.exports = router;

