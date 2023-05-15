const router = require("express").Router();
const apiRoutes = require("./api");
const navRoutes = require("./navigationRoutes");

//It's important to map the more specific router before the more general.
router.use("/api", apiRoutes);
router.use("/", navRoutes);

module.exports = router;