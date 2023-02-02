const express = require("express");

const bookRouter = express.Router();

const bookController = require("../controllers/bookController");

bookRouter.delete("/deletebook/:id", bookController.deleteBook);
bookRouter.get("/", bookController.getAllBooks);
bookRouter.post("/createbook", bookController.createBook);
bookRouter.put("/updatebook", bookController.updateBook);
bookRouter.get("/:id", bookController.getBookById);

module.exports = bookRouter;
