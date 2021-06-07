const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scoreSchema = new mongoose.Schema(
  {
    candidate:[{
      type: Schema.Types.ObjectId,
      ref:"Candidate",
      unique:true
    }],
    firstRoundScore:{
      type: Number,
      required: [true, 'A first round score must have a score'],
      trim: true
    },
    secondRoundScore:{
        type: Number,
        required: [true, 'A second round score must have a score'],
        trim: true
    },
    thirdRoundScore:{
        type: Number,
        required: [true, 'A third round score must have a score'],
        trim: true
    }
});


const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;