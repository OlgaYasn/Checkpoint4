const express = require("express");

const bookRouter = express.Router();

const bookController = require("../controllers/bookController");

bookRouter.get("/", bookController.getAllBooks);

module.exports = bookRouter;
