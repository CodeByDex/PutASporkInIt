const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const path = require("path");
const session = require("express-session");
const csurf = require("csurf");

const sequelize = require("./config/connection");
const SecretToken = require("./config/secretToken");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require('./utils/helpers');
const middleware = require("./utils/middleware");

const app = express();
const PORT = process.env.PORT || 3001;

StartApp();

async function StartApp() {

    const db = await sequelize.sync({ force: false });

    const secretTokens = await SecretToken.GetTokens();

    const sess = {
        secret: secretTokens,
        resave: false,
        saveUninitialized: false,
        store: new SequelizeStore({
            db: sequelize
        }),
        cookie: { secure: true},
        proxy: true
    };
    
    if (process.env.landscape === "local"){
        sess.cookie.secure = false;
    }

    app.use(session(sess));

    app.use(csurf());

    const hbs = exphbs.create({ helpers });
    
    app.engine("handlebars", hbs.engine);
    app.set("view engine", "handlebars");
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "public")));
    
    app.use([middleware.localLoggedIn, middleware.localUserId, middleware.loadCsrfToken]);
    
    app.use((err, req, res, next) => {
        console.log(`Unhandled error: ${err}`);
        res.status(500).render('404');
    });
    
    app.use(routes);
    
    app.use('*', (req, res) => {
        res.status(404).render('404');
    })

    app.listen(PORT, () => console.log(`App Now Listening on ${PORT}`));

};