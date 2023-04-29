const express = require("express");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const path = require("path");
const session = require("express-session");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

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

const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handelbars");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/404.html"))
})

sequelize.sync({force: false})
    .then(() => {
        app.listen(PORT, () => console.log(`App Now Listening on ${PORT}`));
    })