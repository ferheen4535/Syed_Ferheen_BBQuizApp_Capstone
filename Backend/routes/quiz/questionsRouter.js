import express from 'express';
import * as questionsControllers from '../../controllers/quiz/questionsControllers.js';

const router = express.Router();

// Test route
router.get('/test', (req, res) => {
  res.send('Here are the questions');
});

// Seed route
router.get('/seed', questionsControllers.seedQuestions);

// Get all questions
router.get('/', questionsControllers.getQuestions);
router.put('/', questionsControllers.getQuestions);
router.post('/', questionsControllers.createQuestions);

export default router;
