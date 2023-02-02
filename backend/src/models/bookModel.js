const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query(
      "SELECT b.id, b.title, a.firstname as authorfirstname, a.lastname as authorlastname, b.description,b.category_id, b.pages, s.condition, c.type, u.firstname, u.lastname, b.image FROM book as b LEFT JOIN author as a ON b.author_id = a.id LEFT JOIN state as s ON b.state_id = s.id LEFT JOIN category as c ON b.category_id = c.id LEFT JOIN user as u ON b.user_id = u.id"
    )
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
