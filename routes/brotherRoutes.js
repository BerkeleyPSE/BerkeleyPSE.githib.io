// local
const mongooseStatic = require("../databases/static");
const API = require("./api");

// MongoDB collection
const Brothers = mongooseStatic.model("brothers");

module.exports = app => {
  app.get(API.GET_BROTHERS, async (req, res) => {
    const brothers = await Brothers.find({}, { _id: 1, name: 1 }).sort({
      name: 1
    });

    return res.status(200).send(brothers);
  });
};
