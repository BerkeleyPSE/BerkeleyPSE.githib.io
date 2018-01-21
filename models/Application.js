const mongoose = require("mongoose");
const { Schema } = mongoose;

const applicationSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  year: String,
  major: String,
  minor: String,
  commitments: String,
  free_weekend: String,
  invite_only: String,
  interview1: String,
  interview2: String,
  pmt_availability: String,
  hear: String,
  additional_information: String,
  submission_time: Date
});

mongoose.model("applications", applicationSchema);
