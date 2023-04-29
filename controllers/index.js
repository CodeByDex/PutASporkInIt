const router = require("express").Router();
const apiRoutes = require("./api");
const navRoutes = require("./navigationRoutes");

router.use("/", navRoutes);
router.use("/api", apiRoutes);

module.exports = router;