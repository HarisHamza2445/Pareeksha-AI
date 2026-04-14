const express = require('express');
const router = express.Router();
const { generateAndTestQuestion, getQuestions, getDashboardStats } = require('../controllers/questionController');

// POST /api/generate-question
router.post('/generate-question', generateAndTestQuestion);

// GET /api/questions
router.get('/questions', getQuestions);

// GET /api/stats
router.get('/stats', getDashboardStats);

module.exports = router;
