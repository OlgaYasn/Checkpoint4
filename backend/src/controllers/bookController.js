const bookModel = require("../models/bookModel");

const bookController = {
  getAllBooks: (req, res, next) => {
    bookModel
      .findAll()
      .then(([books]) => res.status(200).send(books))
      .catch((err) => next(err));
  },
  getBookById: (req, res, next) => {
    const { id } = req.params;
    bookModel
      .findOne(id)
      .then(([book]) => res.status(200).send(book))
      .catch((err) => next(err));
  },

  createBook: async (req, res, next) => {
    const { title, pages, description } = req.body;
    bookModel
      .createOne({
        title,
        pages,
        description,
      })
      .then(([book]) =>
        res.status(201).send({
          mesage: "book created",
          id: book.insertId,
        })
      )
      .catch((err) => next(err));
  },

  updateBook: (req, res, next) => {
    const { id } = req.params;
    const book = req.body;
    bookModel
      .updateOne(book, id)
      .then(() => res.status(200).send("Book updated successfully"))
      .catch((err) => next(err));
  },

  deleteBook: (req, res, next) => {
    const { id } = req.params;
    bookModel
      .deleteOne(id)
      .then(([book]) => res.status(200).send(book))
      .catch((err) => next(err));
  },
};

module.exports = bookController;
