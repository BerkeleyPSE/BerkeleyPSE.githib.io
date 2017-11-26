const mongoose = require('mongoose');
const { Schema } = mongoose;

const applicationSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  year: String,
  major: String,
  minor: String,
  interests: String,
  campaign: String,
  commitments: String,
  interview1: String,
  interview2: String,
  pmt_availability: String,
  submission_time: Date
});

mongoose.model('applications', applicationSchema);
