const Score = require('./../models/scoreModel');

exports.getAllScore = async (req,res) => {
    try {

    const pipeline = [
       {$project: {
        _id: "$_id",
        candidate:"$candidate",
        avg : { $avg: { $sum: ["$firstRoundScore","$secondRoundScore","$thirdRoundScore"] } },
        total_marks: { $sum: ["$firstRoundScore","$secondRoundScore","$thirdRoundScore"] }
      },
    },
    {
      $lookup: {
          from: "candidates",
          localField: "candidate",
          foreignField: "_id",
          as: "candidate"
      }
    }
    ];  
    const scores = await Score.aggregate(pipeline);
   

    res.status(200).json({
        status: 'success',
        results: scores.length,
        scores
    });
    } catch (err) {
        console.log(`Error : ${err}`);
        res.status(404).json({
        status: 'fail',
        message: err
    });
    }
}

exports.createScore = async (req, res) => {
    try {
    // Find the document
    const query = {...req.body};
    const score = await Score.create(query);
      res.status(201).json({
        status: 'success',
        data: {
          score
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };


exports.getHighScore = async (req, res) => {
  try {
    const pipeline = [
       {$project: {
        _id: "$_id",
        candidate:"$candidate",
        avg : { $avg: ["$firstRoundScore","$secondRoundScore","$thirdRoundScore"] },
        total_marks: { $sum: ["$firstRoundScore","$secondRoundScore","$thirdRoundScore"] }
      },
    },
    { $sort: { total_marks: -1 } },
    { $limit : 1 },
    {
      $lookup: {
          from: "candidates",
          localField: "candidate",
          foreignField: "_id",
          as: "candidate"
      }
    }
    ];  
    const scores = await Score.aggregate(pipeline);
   

    res.status(200).json({
        status: 'success',
        results: scores.length,
        scores
    });
    } catch (err) {
        console.log(`Error : ${err}`);
        res.status(404).json({
        status: 'fail',
        message: err
    });
    }
}
