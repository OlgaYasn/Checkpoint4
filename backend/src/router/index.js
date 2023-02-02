const express = require("express");

const router = express.Router();

const bookRouter = require("./bookRouter");
const categoryRouter = require("./categoryRouter");
const stateRouter = require("./stateRouter");

router.use("/book", bookRouter);
router.use("/category", categoryRouter);
router.use("/state", stateRouter);

module.exports = router;
