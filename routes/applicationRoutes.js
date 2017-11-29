const mongoose = require('mongoose');
const Application = mongoose.model('applications');

module.exports = app => {
  app.post('/api/applications', async (req, res) => {
    const {
      name,
      email,
      phone,
      year,
      major,
      minor,
      interests,
      campaign,
      commitments,
      interview1,
      interview2,
      pmt_availability
    } = req.body;

    const app = new Application({
      name,
      email,
      phone,
      year,
      major,
      minor,
      interests,
      campaign,
      commitments,
      interview1,
      interview2,
      pmt_availability,
      submission_time: Date.now()
    });

    try {
      await app.save();
      res.status(200).send(true);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
