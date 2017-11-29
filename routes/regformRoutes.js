const mongoose = require('mongoose');
const RegForm = mongoose.model('regforms');

module.exports = app => {
  app.post('/api/regforms', async (req, res) => {
    const { name, email } = req.body;

    const regform = new RegForm({
      name,
      email,
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
