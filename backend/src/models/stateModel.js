const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM state")
    .then((state) => state);
};

module.exports = { findAll };
