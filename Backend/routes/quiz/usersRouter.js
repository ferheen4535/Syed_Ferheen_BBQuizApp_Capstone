import express from 'express';
import * as usersControllers from '../../controllers/quiz/usersControllers.js';

const router = express.Router();


//username: 'Glen',
 // email: 'glen.k@gmail.com',
 // _id: new ObjectId('680f7ae29fe2c5f8a9b3060d'),//

 router.post('/', usersControllers.createUser);


// Seed
router.get('/seed', usersControllers.seedUsers);

// Index - Get all users
router.get('/', usersControllers.getUsers);

// Show - Get a single user
router.get('/:id', usersControllers.getUser);

//username: 'Glen',
 // email: 'glen.k@gmail.com',
 // _id: new ObjectId('680f7ae29fe2c5f8a9b3060d'),//

router.post('/', usersControllers.createUser);





//username: 'Mark',
//email: 'mark.k@gmail.com',
//_id: new ObjectId('680e4fe3365a37054b886b27'),
// Delete - Remove a user//
//http://localhost:5055/quiz/users/680e4fe3365a37054b886b27//

router.delete('/:id', usersControllers.deleteUser);

export default router;

//I am able to make Create, update, and delete routes in Postman and 
// I see the changes in compass but when I go back the next day to 
// recheck my work, the IDs change and I can't see the changes in postman again//
//I tried to work on fixing it all weekend but not sure why it is happening//