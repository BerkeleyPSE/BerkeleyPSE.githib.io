// node modules
const isEmpty = require("lodash/isEmpty");
const isUndefined = require("lodash/isUndefined");

// local
const mongooseStatic = require("../databases/static");
const API = require("./api");

// MongoDB collection
const Brothers = mongooseStatic.model("brothers");

module.exports = app => {
  app.get(API.GET_BROTHERS, async (req, res) => {
    const brothers = await Brothers.find().sort({ name: 1 });
    const brothersList = brothers.map(bro => bro.key);
    const executives = brothers.filter(bro => bro.isExecutive.value);
    const executivesList = executives.map(bro => bro.key);

    return res.status(200).send({
      brothers,
      executives,
      brothersList,
      executivesList
    });
  });
};
