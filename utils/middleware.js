function localLoggedIn(req, res, next) {
    if (!req.session.loggedIn) {
        res.locals.loggedIn = false;
    } else {
        res.locals.loggedIn = true;
    }

    next();
};

function localUserId(req, res, next) {
    if (!req.session.userID) {
        delete res.locals.userId;
        res.clearCookie("userID");
    } else {
        res.locals.userID = req.session.userID;
        res.cookie("userID", req.session.userID);
    }

    next();
}

module.exports = {
    localLoggedIn,
    localUserId
}
