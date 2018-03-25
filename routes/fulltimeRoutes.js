// local
const mongooseStatic = require("../databases/static");
const API = require("./api");

// MongoDB collection
const Fulltimes = mongooseStatic.model("careers_fulltimes");

module.exports = app => {
  app.get(API.GET_FULLTIMES, async (req, res) => {
    const fulltimes = await Fulltimes.find().sort({ name: 1 });
    return res.status(200).send(fulltimes);
  });
};
