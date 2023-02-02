const stateModel = require("../models/stateModel");

const stateController = {
  getAllStates: (req, res, next) => {
    stateModel
      .findAll()
      .then(([state]) => res.status(200).send(state))
      .catch((err) => next(err));
  },
};
module.exports = stateController;
