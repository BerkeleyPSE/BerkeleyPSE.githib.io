const mongoose = require('mongoose');
const { Schema } = mongoose;

const regformSchema = new Schema({
  name: String,
  email: String,
  submission_time: Date
});

mongoose.model('regforms', regformSchema);
