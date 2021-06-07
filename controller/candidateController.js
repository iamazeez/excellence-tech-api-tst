const Candidate = require('./../models/candidateModel');

exports.getAllUser = async (req,res) => {
    try {
    const candidates = await Candidate.find({});
    res.status(200).json({
        status: 'success',
        results: candidates.length,
        data: {
        candidates
        }
    });
    } catch (err) {
        console.log(`Error : ${err}`);
    res.status(404).json({
        status: 'fail',
        message: err
    });
    }
}

exports.createCandidate = async (req, res) => {
    try {
      const newCandidate = await Candidate.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          candidate: newCandidate
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };