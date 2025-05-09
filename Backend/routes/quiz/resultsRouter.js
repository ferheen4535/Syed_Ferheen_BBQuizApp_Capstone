import express from 'express';
import * as resultsControllers from '../../controllers/quiz/resultsControllers.js';

const router = express.Router();

// Seed route
router.get('/seed', resultsControllers.seedResults);

// Index route (replace this with actual index logic later)
router.get('/', (req, res) => {
    res.send('Here are your results');
});

// Create route//
//title: 'The Masti Macha',
//scentMatch: 'Macha Macha Macha',
//description: 'For my Macha Girlies',

//my id numbers keep changing so I am having a hard time checking the results//
router.post('/', resultsControllers.createResult); 


// update route - PUT /:id 680bca9082d1f2edec46715c//
//since the ids keep changing on me, the update goes to another entry.//
//680f82bb0ed5ac6cd24d3934
//title "Super Badmaash"
//scentMatch "Macha Macha Macha"
//description "For my Macha Girlies"
router.put('/:id', resultsControllers.updateResult);



// DELETE route - delete by ID: 680bc43a8f66f6369a745cb9//
//_id:680bc43a8f66f6369a745cb9
// title: "The Mint Maverick"
// scentMatch: "Masti Mint + Icy Springs Beard Butter and Oil"
// description: "Fresh, sharp, and ready to break the mold. You think fast, move faster…"
//
router.delete('/:id', resultsControllers.deleteResult);



export default router;
//I am able to make Create, update, and delete routes in Postman and 
// I see the changes in compass but when I go back the next day to 
// recheck my work, the IDs change and I can't see the changes in postman again//
//I tried to work on fixing it all weekend but not sure why it is happening//