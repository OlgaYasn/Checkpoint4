const express = require("express");

const bookRouter = express.Router();

const bookController = require("../controllers/bookController");

bookRouter.get("/", bookController.getAllBooks);
bookRouter.get("/:id", bookController.getBookById);
bookRouter.post("/createbook", bookController.createBook);
bookRouter.put("/updatebook", bookController.updateBook);
bookRouter.put("/deletebook", bookController.deleteBook);

module.exports = bookRouter;
