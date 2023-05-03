const router = require('express').Router();
const {User, UserRecipeFavorite} = require('../../models');
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

router.put('/:id', (req, res) => {
    helper.SafeUpdate(req.params.id, res, User, {
        userName: req.body.userName,
        email: req.body.email
    })
})

router.delete('/:id', (req, res) => {
    helper.SafeDelete(req.params.id, res, User)
})


router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // Remove the session variables
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  

router.post("/:userID/Favorites", (req, res) => {
    helper.SafeCreate(res, UserRecipeFavorite, {
        userID: req.params.userID,
        recipeID: req.body.recipeID
    })
});

router.get("/:userID/Favorites", (req, res) => {
    helper.SafeGetAll(res, UserRecipeFavorite, [], {userID: req.params.userID});
});

router.delete("/:userID/Favorites/:id", (req, res) => {
    helper.SafeDelete(req.params.id, res, UserRecipeFavorite);
});

module.exports = router;

