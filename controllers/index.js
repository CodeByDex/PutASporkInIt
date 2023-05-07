const router = require("express").Router();
const apiRoutes = require("./api");
const navRoutes = require("./navigationRoutes");

router.use("/api", apiRoutes);
router.use("/", navRoutes);

module.exports = router;