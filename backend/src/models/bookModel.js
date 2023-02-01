const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM book")
    .then((books) => books);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM book where id = ?", [id])
    .then(([book]) => book);
};

const createOne = (payload) => {
  return db
    .promise()
    .query("INSERT INTO book SET ?", [payload])
    .then((book) => book);
};
const updateOne = (payload, id) => {
  return db
    .promise()
    .query("UPDATE book SET ? WHERE id = ?", [payload, Number(id)])
    .then(([res]) => res);
};

const deleteOne = (id) => {
  return db
    .promise()
    .query("DELETE from book WHERE id = ?", [id])
    .then((book) => book);
};

module.exports = { findAll, findOne, createOne, updateOne, deleteOne };
