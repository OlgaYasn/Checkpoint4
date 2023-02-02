const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM category")
    .then((category) => category);
};

module.exports = { findAll };
