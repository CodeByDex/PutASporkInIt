const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const path = require("path");
const session = require("express-session");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require('./utils/helpers');
const middleware = require("./utils/middleware");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: "secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use([middleware.localLoggedIn, middleware.localUserId]);

app.use((err, req, res, next) => {
    console.log(`Unhandled error: ${err}`);
    res.status(500).sendFile(path.join(__dirname, "public/404.html"));
});

app.use(routes);

app.use('*', (req, res) => {
    res.status(404).render('404');
  })
  
sequelize.sync({force: false})
    .then(() => {
        app.listen(PORT, () => console.log(`App Now Listening on ${PORT}`));
    })