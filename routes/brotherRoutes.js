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
    const executivesList = brothers
      .filter(bro => bro.isExecutive)
      .map(bro => bro.key);

    return res.status(200).send({
      brothers,
      brothersList,
      executivesList
    });
  });

  app.get(API.GET_ACTIVE_BROTHER, async (req, res) => {
    if (isEmpty(req.query) || isUndefined(req.query.key))
      return res.status(422).send({});
    const activeBrother = await Brothers.findOne({ key: req.query.key });
    return res.status(200).send(activeBrother);
  });

  app.get(API.GET_BROTHER_INFO, async (req, res) => {
    if (isEmpty(req.query) || isUndefined(req.query.key)) {
      return res.status(422).send({});
    }
    const info = await Brothers.findOne({ key: req.query.key }).select({
      key: 1,
      name: 1
    });
    if (isUndefined(info)) return res.status(422).send({});
    return res.status(200).send(info);
  });
};
