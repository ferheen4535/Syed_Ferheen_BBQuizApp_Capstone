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

// Post a new question
// text: 'How much Macha do you drink?',
//options: [ 'Too Macha', 'Not that Macha', 'Not Macha', 'Macha Macha' ],
//_id: new ObjectId('680fb5f5651fc22d2433be4a'),
router.post('/', questionsControllers.createQuestions);


// update route - PUT /:id //
///not working for me///
// router.put('/:id', questionsControllers.updateQuestion);

export default router;

//I am able to make Create, update, and delete routes in Postman and 
// I see the changes in compass but when I go back the next day to 
// recheck my work, the IDs change and I can't see the changes in postman again//
//I tried to work on fixing it all weekend but not sure why it is happening//