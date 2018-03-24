// local
const mongooseApp = require("../databases/application");
const API = require("./api");

// MongoDB collection
const Applications = mongooseApp.model("applications");

module.exports = app => {
  app.post(API.CREATE_APP, async (req, res) => {
    const app = new Applications({ ...req.body, submission_time: Date.now() });

    try {
      await app.save();
      res.status(200).send(true);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
