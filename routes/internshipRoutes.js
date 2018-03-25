// local
const mongooseStatic = require("../databases/static");
const API = require("./api");

// MongoDB collection
const Internships = mongooseStatic.model("careers_internships");

module.exports = app => {
  app.get(API.GET_INTERNSHIPS, async (req, res) => {
    const internships = await Internships.find().sort({ name: 1 });
    return res.status(200).send(internships);
  });
};
