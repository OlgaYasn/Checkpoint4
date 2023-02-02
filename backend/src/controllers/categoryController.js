const categoryModel = require("../models/categoryModel");

const categoryController = {
  getAllCategories: (req, res, next) => {
    categoryModel
      .findAll()
      .then(([category]) => res.status(200).send(category))
      .catch((err) => next(err));
  },
};
module.exports = categoryController;
