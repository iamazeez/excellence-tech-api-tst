const mongoose = require('mongoose');


const candidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A candidate must have a name']
    },
    email:{
      type: String,
      required: [true, 'A candidate must have a name'],
      unique: true,
      trim: true
    }
});


const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
