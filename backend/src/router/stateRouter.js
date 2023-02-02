const express = require("express");

const stateRouter = express.Router();
const stateController = require("../controllers/stateController");

stateRouter.get("/", stateController.getAllStates);

module.exports = stateRouter;
