const mongoose = require('mongoose');

const attemptSchema = new mongoose.Schema({
  attemptIndex: Number,
  attemptText: String,
  score: Number,
  evaluatorNotes: String,
  passed: Boolean
});

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  idealAnswer: { type: String, required: true },
  explanation: { type: String },
  subject: { type: String },
  examType: { type: String },
  difficultyJustification: { type: String },
  tags: [String],
  attempts: [attemptSchema],
  failureRate: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Question', questionSchema);
