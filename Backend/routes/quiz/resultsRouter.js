import express from 'express';
import * as resultsControllers from '../../controllers/quiz/resultsControllers.js';

const router = express.Router();

// Seed database with results
router.get('/seed', resultsControllers.seedResults);

// Simple index route (optional)
router.get('/', (req, res) => {
  res.send('Here are your results');
});

// Create a new result
router.post('/', resultsControllers.createResult);

// Update an existing result by ID
router.put('/:id', resultsControllers.updateResult);

// Delete a result by ID
router.delete('/:id', resultsControllers.deleteResult);



export default router;
