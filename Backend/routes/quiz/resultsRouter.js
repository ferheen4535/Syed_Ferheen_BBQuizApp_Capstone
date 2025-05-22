import express from 'express';
import * as resultsControllers from '../../controllers/quiz/resultsControllers.js';

const router = express.Router();

// Seed database with results
router.get('/seed', resultsControllers.seedResults);

// Route to handle calculated result from quiz answers
router.post('/', resultsControllers.getResultByAnswer);
router.post('/create', resultsControllers.createResult);
router.put('/:id', resultsControllers.updateResult);
router.delete('/:id', resultsControllers.deleteResult);

router.get('/seed',   resultsControllers.seedResults);
router.get('/:id',    resultsControllers.getResultById);    
router.post('/',      resultsControllers.getResultByAnswer);



export default router;