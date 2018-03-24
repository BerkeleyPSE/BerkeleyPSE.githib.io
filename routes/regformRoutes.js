// local
const mongooseApp = require("../databases/application");
const API = require("./api");

// MongoDB collection
const Regforms = mongooseApp.model("regforms");

module.exports = app => {
  app.post(API.CREATE_REGFORM, async (req, res) => {
    const regform = new Regforms({
      ...req.body,
      submission_time: Date.now()
    });

    try {
      await regform.save();
      res.status(200).send(true);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
